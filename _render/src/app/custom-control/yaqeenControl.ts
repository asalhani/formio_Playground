import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';
import * as _ from 'lodash';

import { FormioOptions } from 'angular-formio';
import { IdentityType } from './const';

export class YaqeenControlComponent extends BaseComponent {
    name2: string ;
    myPlaceholder: string;
    [x: string]: any;
    constructor(component, options, data) {
        super(component, options, data);
        this.name2 = 'adib';

    }
    elementInfo() {
        // this.validators.push('email');

        // tslint:disable-next-line:prefer-const
        const info = super.elementInfo();
         info.type = 'container';
         info.attr.class = '';
        // info.changeEvent = 'change';
        return info;
    }

    build() {
        super.build();
        this.myPlaceholder = _.get(this.component, 'fields.idType.placeholder', '');
        console.log(this.myPlaceholder);
        // tslint:disable-next-line:max-line-length
        const ele = super.renderTemplate(`<div><input id="test" type='text' placeholder='${this.myPlaceholder}'  /></div>`, { name: this.name2, x: this.myPlaceholder });
        const element = super.getElement();
        element.appendChild(ele);
    }

}


