import { Component, OnInit, ViewChild } from '@angular/core';
import { Formio } from 'formiojs/full';
import { FormioComponent, ComponentOptions, ValidateOptions, FormioForm } from 'angular-formio';


@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html'
})
export class CustomControlComponent {

  data: any;
  myForm: any;
  customCompForm: any;

  constructor() {
    this.data = { data: { undefinedYaqeenValidation: { idNumber: '32432432', idType: 2 } } };
    this.customCompForm = {
      "components": [
        {
          "key": "undefinedYaqeenValidation",
          "type": "yaqeenControl",
          "autofocus": true,
          "label": "Yaqeen Validation ",
          "tableView": false,
          "input": true,
          "clearOnHide": true,
          "persistent": true,
          "protected": false,
          "fields": {
            "idType": {
              "label": "ID type",
              "required": true,
              "placeholder": "-- select id type --",
              "type": "select"
            },
            "idNumber": {
              "label": "ID Number",
              "required": true,
              "placeholder": "ID Number",
              "type": "text"
            }
          },
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        }
      ],
      title: 'New form',
      display: 'form',
      name: 'newForm',
      path: 'newform'
    };
  }

  onSubmit(requestSubmission: any): void {
    console.log(requestSubmission);
  }
}
