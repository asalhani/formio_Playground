import { Component, OnInit, ViewChild } from '@angular/core';
import { Formio } from 'formiojs/full';
import { FormioComponent, ComponentOptions, ValidateOptions, FormioForm } from 'angular-formio';


@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html'
})
export class CustomControlComponent {

  myForm: any;
  customCompForm: any;

  constructor() {
    this.customCompForm = {
      components: [
        {
          isNew: true,
          key: 'yaqeenControlComp',
          type: 'yaqeenControl',
          autofocus: true,
          label: 'Yaqeen Validation ',
          tableView: true,
          input: true,
          clearOnHide: true,
          persistent: true,
          protected: false,
          fields: {
            idType: {
              label: 'ID type',
              required: true,
              placeholder: '-- select id type --',
              type: 'select'
            },
            idNumber: {
              label: 'ID Number',
              required: true,
              placeholder: 'ID Number',
              type: 'text'
            }
          }
        },
        {
          autofocus: false,
          input: true,
          label: 'Submit',
          tableView: false,
          ke: 'submit',
          size: 'md',
          leftIcon: '',
          rightIcon: '',
          block: false,
          action: 'submit',
          disableOnInvalid: false,
          theme: 'primary',
          type: 'button'
        }
      ],
      title: 'New form',
      display: 'form',
      name: 'newForm',
      path: 'newform'
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

  onSubmit(requestSubmission: any): void {
    console.log(requestSubmission);
  }
}
