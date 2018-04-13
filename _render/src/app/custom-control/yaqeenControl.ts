import { BaseComponent, TextFieldComponent } from 'formiojs/lib/components/base/Base';
import { Formio } from 'formiojs/full';
import FormioUtils from 'formiojs/utils';

import { FormioOptions } from 'angular-formio';

export class YaqeenControlComponent extends BaseComponent {
    [x: string]: any;
    constructor(private component, options, data) {
        super(component, options, data);
    }
    elementInfo() {
        // this.validators.push('email');

        // tslint:disable-next-line:prefer-const
        let info = super.elementInfo();
        info.type = 'input';
        info.changeEvent = 'input';
        info.attr.type = 'text';
        info.attr.autofocus = true;
        info.attr.spellcheck =true;
        // info.attr.inputMask = "";
         info.attr.label = "Id Number";
         info.attr.key = "idNumber";
         info.attr.placeholder = "ID number";
         info.attr.tableView= true;
         info.attr.inputType= "text";

        info.attr.multiple= false;
         info.attr.defaultValue= "dsfsda";
        // info.attr.protected= false;
        // info.attr.unique= false;
        // info.attr.persistent= true;
         //info.attr.hidden= false;
        // info.attr.clearOnHide= true;
        //debugger
        // info.type = 'input';
        // info.changeEvent = 'input';
        // info.attr = {

        //     validate: {
        //         required: true,
        //         minLength: 10,
        //         maxLength: 10,
        //         pattern: "",
        //         custom: "",
        //         customPrivate: false
        //     },
        //     conditional: {
        //         show: "",
        //         when: null,
        //         eq: ""
        //     },
        //     type: "textfield",
        //     labelPosition: "top",
        //     tags: [],
        //     properties: {}

        // };
        // info.attr.placeholder = "cccccc";
        //let test = info.component.validations;
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


