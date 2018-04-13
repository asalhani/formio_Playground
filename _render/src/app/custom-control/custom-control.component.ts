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
          type: "yaqeenControl",
          isNew: true,
          key: "yaqeenControlComp",
          spellcheck:true
        },
        {
          autofocus: false,
          input: true,
          label: "Submit",
          tableView: false,
          ke: "submit",
          size: "md",
          leftIcon: "",
          rightIcon: "",
          block: false,
          action: "submit",
          disableOnInvalid: false,
          theme: "primary",
          type: "button"
        }
      ],
      revisions: "",
      _vid: 0,
      access: [
        {
          roles: [
            "5acbd1b53c2be2a2ded30239",
            "5acbd1b53c2be2606cd3023a",
            "5acbd1b53c2be23d22d3023b"
          ],
          type: "read_all"
        }
      ],
      submissionAccess: [],
      created: "2018-04-13T19:31:53.228Z",
      _id: "5ad105a939a94bb009f3c045",
      title: "New form",
      display: "form",
      settings: {},
      name: "newForm",
      path: "newform",
      project: "5acbd1b53c2be283ced30238",
      modified: "2018-04-13T19:31:53.419Z",
      machineName: "kpeemdlniebvueo:newForm"
    };

    this.myForm = {
      "type": "form",
      "tags": [],
      "owner": "5acbd180fad38b209c044dc4",
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Identity Type",
          "key": "identityType",
          "placeholder": "-- select type --",
          "data": {
            "values": [
              {
                "value": "nin",
                "label": "Nin"
              },
              {
                "value": "iqama",
                "label": "Iqama"
              }
            ],
            "json": "",
            "url": "",
            "resource": "",
            "custom": ""
          },
          "dataSrc": "values",
          "valueProperty": "",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.label }}</span>",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true
          },
          "type": "select",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Id Number",
          "key": "idNumber",
          "placeholder": "ID number",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": 10,
            "maxLength": 10,
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "label": "Submit",
          "tableView": false,
          "key": "submit",
          "size": "md",
          "leftIcon": "",
          "rightIcon": "",
          "block": false,
          "action": "submit",
          "disableOnInvalid": false,
          "theme": "primary",
          "type": "button"
        }
      ],
      "revisions": "",
      "_vid": 0,
      "access": [
        {
          "roles": [
            "5acbd1b53c2be2a2ded30239",
            "5acbd1b53c2be2606cd3023a",
            "5acbd1b53c2be23d22d3023b"
          ],
          "type": "read_all"
        }
      ],
      "submissionAccess": [],
      "created": "2018-04-13T19:31:53.228Z",
      "_id": "5ad105a939a94bb009f3c045",
      "title": "New form",
      "display": "form",
      "settings": {},
      "name": "newForm",
      "path": "newform",
      "project": "5acbd1b53c2be283ced30238",
      "modified": "2018-04-13T19:31:53.419Z",
      "machineName": "kpeemdlniebvueo:newForm"
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
