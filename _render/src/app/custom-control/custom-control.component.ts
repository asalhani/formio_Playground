import { Component, OnInit, ViewChild } from '@angular/core';
import { Formio } from 'formiojs/full';
import { FormioComponent, ComponentOptions, ValidateOptions, FormioForm } from 'angular-formio';


@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html'
})
export class CustomControlComponent {

  myForm : any
  
  constructor() {
    this.myForm = {
      title: "Yaqeen control component",
      group: "layout",
      template:"tfsdemplate.html",
      viewTemplate:"tempdsfdslate.html",
      components: [
          {
            type: "yaqeenControl",
            isNew: true,
            key: "custom",
            protected: false,
            persistent: true,
            placeholder: "Enter your email address",
            spellcheck:false
          },
          {
            type: 'textarea',
            label: 'Content',
            placeholder: 'Enter content here',
            wysiwyg: true,
            key: 'content',
            input: true,
            inputType: 'text'
          }
      ]
    };
    // this.myForm = {};
    // let validateOptions : ValidateOptions = { };
    // this.myForm.title= "form title";
    // this.myForm.name = "form name";
    // let component : ComponentOptions<'', ValidateOptions> = {}
    // component.validate = validateOptions;
    // component.type = "yaqeenControl";
    // component.key = "custom";
    // component.protected = false;
    // component.persistent = true;
    // component.tableView = true;
    // component.label= " my label";
    // debugger;
    // this.myForm.components = [];
    // this.myForm.components.push(component);
  }
}
