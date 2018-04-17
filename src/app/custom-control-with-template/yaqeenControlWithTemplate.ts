import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';
import * as _ from 'lodash';

import { FormioOptions } from 'angular-formio';

export class YaqeenControlWithTemplateComponent extends BaseComponent {
    [x: string]: any;
    constructor(component, options, data) {
        super(component, options, data);
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
        let ele = super.renderTemplate(`<div><input id="test" type='text' placeholder='${this.myPlaceholder}'  /></div>`, { name: this.name2, x:this.myPlaceholder });
        let element = super.getElement();
        element.appendChild(ele);
    }
}


