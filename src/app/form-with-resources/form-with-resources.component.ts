import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-with-resources',
  templateUrl: './form-with-resources.component.html'
})
export class FormWithResourcesComponent implements OnInit {

  constructor() { }

  formSchema = { };

  ngOnInit() {
    this.formSchema = {
      "type": "form",
      "components": [
        {
          "input": true,
          "tableView": true,
          "label": "Make",
          "key": "make",
          "placeholder": "",
          "data": {
            "values": [
              {
                "value": "",
                "label": ""
              }
            ],
            "json": "",
            "url": "",
            "resource": "5ad7302355c73f05a0f94a40",
            "custom": ""
          },
          "dataSrc": "resource",
          "valueProperty": "data.makeResource",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.data.makeResource }}</span>",
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
          "hideLabel": false,
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "searchField": "data.makeResource__regex",
          "isNew": false,
          "lockKey": true
        },
        {
          "input": true,
          "tableView": true,
          "label": "Model",
          "key": "model",
          "placeholder": "",
          "data": {
            "values": [
              {
                "value": "",
                "label": ""
              }
            ],
            "json": "",
            "url": "",
            "resource": "5ad7312055c73f05a0f94a44",
            "custom": ""
          },
          "dataSrc": "resource",
          "valueProperty": "data.modelResource",
          "defaultValue": "",
          "refreshOn": "make",
          "filter": "data.makeRefrence={{data.make}}",
          "authenticate": false,
          "template": "<span>{{ item.data.modelResource }}</span>",
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
          "hideLabel": false,
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "searchField": "data.modelResource__regex",
          "lockKey": true,
          "clearOnRefresh": true
        },
        {
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Year",
          "key": "year",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
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
          "hideLabel": false,
          "labelPosition": "top",
          "tags": [],
          "properties": {}
        },
        {
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
          "type": "button",
          "hideLabel": false
        }
      ],
      "display": "form",
      "title": "Vehicle Registration Form",
      "name": "vehicleRegistrationForm",
      "path": "vehicleregistrationform"
    };
  }

}
