import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class HtmlLoaderService {
    constructor(private http: Http) { }

    getHtml(url: string): Observable<any> {
        return this.http.get(url);
            // .map(response => {
            //     console.log(response.text);
            //     return response.text;
            // });
    }
}
