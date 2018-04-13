import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';

import { FormioOptions } from 'angular-formio';

export class YaqeenControlComponent extends BaseComponent {
    [x: string]: any;
    constructor(component, options, data) {
        super(component, options, data);
    }
    elementInfo() {
        this.validators.push('email');
        
        debugger;
        // tslint:disable-next-line:prefer-const
        let info = super.elementInfo();
        info.type = 'input';
        info.changeEvent = 'input';
        info.attr.type="email";
        let test = info.component.validations;
        //info.template = FormioUtils.interpolate("<h1>test</h2>")
        // read proparty from JSON
        // info.attr.spellcheck = this.component.spellcheck;

        return info;
    }


    // build(){
    //     // debugger;
    //     // super.build();
    //     // let ele = super.renderTemplate("<div id='yaqeenControl'>{{myNmae}}</div>", {myNmae: this.myNmae});
    //     // let element = super.getElement();
    //     // element.appendChild(ele);
    //   }

}


