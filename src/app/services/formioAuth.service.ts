import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { ResponseType } from '@angular/http';
import { FormioAuthService } from 'angular-formio/auth';

@Injectable()
export class EspFormioAuthService {
    private user: any;
    private token: string;

    constructor(private _http: HttpClient,
        private _formioAuthService: FormioAuthService) {
        const subOnUser = this._formioAuthService.onUser.subscribe(subUser => {

            this.user = subUser;
            localStorage.setItem('formioToken', this.token);
            localStorage.setItem('formioUser', JSON.stringify(this.user));
            localStorage.setItem('formioAppRole', 'user');

            return Observable.of(true);
        });
    }

    auth() {

        const jsonData = '{"data":{"email":"asalhani@elm.sa","password":"P@ssw0rd"}}';
        const url = 'http://localhost:3001/user/login';

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this._http.post(url, jsonData, { headers: headers, observe: 'response' }).subscribe(response => {
            this.token = response.headers.get('x-jwt-token');
            this.user = response.body;
            this._formioAuthService.setUser(this.user);
        });
    }
}
