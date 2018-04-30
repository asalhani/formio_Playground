import { Component, OnInit } from '@angular/core';
import { EspFormioAuthService } from '../services/formioAuth.service';


@Component({
  selector: 'app-form-with-resources',
  templateUrl: './form-with-resources.component.html'
})
export class FormWithResourcesComponent implements OnInit {

  constructor(private _espFormioAuthService: EspFormioAuthService,
  ) {
    // auth. form.io (this is required in case we have resources in the form)
    this._espFormioAuthService.auth();
  }

  formSchema = {};

  ngOnInit() {
    this.formSchema ={
      "components": [
        {
          "type": "panel",
          "title": "Page 1",
          "isNew": false,
          "components": [
            {
              "clearOnHide": true,
              "input": true,
              "tableView": true,
              "key": "page1SimpelForm",
              "src": "",
              "reference": true,
              "form": "5ae00faa55c73f05a0f94ab8",
              "path": "",
              "label": "simpelForm",
              "protected": false,
              "unique": false,
              "persistent": true,
              "type": "form",
              "project": "",
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
          "input": false,
          "key": "page1",
          "clearOnHide": false,
          "theme": "default",
          "tableView": false,
          "hideLabel": true
        },
        {
          "type": "panel",
          "title": "Page 2",
          "isNew": false,
          "components": [
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Text",
              "key": "page2Text",
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
              "spellcheck": true,
              "validate": {
                "required": false,
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
              "labelPosition": "top",
              "tags": [],
              "properties": {}
            }
          ],
          "input": false,
          "key": "page2",
          "clearOnHide": false,
          "theme": "default",
          "tableView": false,
          "hideLabel": true
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
      "display": "wizard",
      "page": 0,
      "numPages": 2,
      "name": "TestWizardClearBehviour",
      "path": "testwizardclearbehviour",
      "title": "TestWizardClearBehviour"
    };
  }
}
