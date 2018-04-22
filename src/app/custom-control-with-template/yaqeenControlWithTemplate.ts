import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';
import * as _ from 'lodash';

import { FormioOptions } from 'angular-formio';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceLocator } from '../services/locator.service';
import { HtmlLoaderService } from '../services/HtmlLoader.service';

@Component({
    templateUrl: './yaqeenControlWithTemplate.html'
  })
export class YaqeenControlWithTemplateComponent extends BaseComponent {
    [x: string]: any;

    constructor(component, options, data) {
        super(component, options, data);
        //debugger;
        // this.htmlLoaderService = ServiceLocator.injector.get(HtmlLoaderService);
    }
    

    textboxPlaceHolder: string;
    htmlTemplate = '';

    elementInfo() {
        // this.validators.push('email');

        // tslint:disable-next-line:prefer-const
        const info = super.elementInfo();
        info.type = 'container';
        info.attr.class = '';

        this.textboxPlaceHolder = _.get(this.component, 'fields.idType.placeholder', '');
        // info.changeEvent = 'change';
        return info;
    }

    build() {
        super.build();
    
        console.log(this.textboxPlaceHolder);
         const ele = super.renderTemplate
             (`<form><input type="text" [(ngModel)]="textboxPlaceHolder" name="textboxPlaceHolder"> value:${this.textboxPlaceHolder}</form>`);
       // const ele = super.renderTemplate
        (`<h3>test inline</h3>`);
        const element = super.getElement();
        element.appendChild(ele);
    }
}


