import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formio-teaster',
  templateUrl: './formio-teaster.component.html'
})
export class FormioTeasterComponent implements OnInit {

  form: any = {};
  formSubmission = {};
  constructor() {
    this.formSubmission = { "data": { "submit": true, "day": "11/1/2018" } };
    this.form = {
      "type": "form",
      "tags": [],
      "owner": "5acbd180fad38b209c044dc4",
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Day",
          "key": "day",
          "fields": {
            "day": {
              "type": "number",
              "placeholder": "",
              "required": false
            },
            "month": {
              "type": "select",
              "placeholder": "",
              "required": false
            },
            "year": {
              "type": "number",
              "placeholder": "",
              "required": false
            }
          },
          "dayFirst": true,
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "custom": ""
          },
          "type": "day",
          "labelPosition": "top",
          "inputsLabelPosition": "top",
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
      "modified": "2018-04-16T08:11:48.801Z",
      "machineName": "kpeemdlniebvueo:newForm"
    }
  }


  ngOnInit() {
  }


  onSubmit(requestSubmission: any): void {
    console.log(requestSubmission);
    console.log(JSON.stringify(requestSubmission));
  }

}
