import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-datepicker-formio-custom',
  templateUrl: './test-datepicker-formio-custom.component.html'
})
export class TestDatepickerFormioCustomComponent implements OnInit {
  ngOnInit(): void {
  }

  data: any;
  myForm: any;
  customCompForm: any;

  constructor() {
    //this.data = {};
    this.data = {"data":{"datepicker":{"calendarType":"UmmAlQura","date":"07/10/1439"},"submit":true},"state":"submitted"};

    // this.customCompForm = {
    //   "display": "form",
    //   "components": [
    //     {
    //       "label": "Day",
    //       "mask": false,
    //       "type": "day",
    //       "input": true,
    //       "key": "day2",
    //       "fields": {
    //         "day": {
    //           "type": "number"
    //         },
    //         "month": {
    //           "type": "select"
    //         },
    //         "year": {
    //           "type": "number"
    //         }
    //       }
    //     }
    //   ],
    //   "settings": {
    //     "pdf": {
    //       "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
    //       "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
    //     }
    //   }
    // };

    this.customCompForm = {
      "components": [
        {
          "label": "Datepicker",
          "refreshOnChange": false,
          "mask": false,
          "type": "datepicker",
          "key": "datepicker",
          "input": true,
          "fields": {
            "calendarType": {
              "label": "Calendar Type",
              "type": "select",
              "placeholder": "",
              "required": true
            },
            "date": {
              "label": "Date",
              "type": "textfield",
              "placeholder": "",
              "required": true
            }
          },
          "allowFeatureDate": false,
          "numberOfMonthesToShow": 1,
          "placeholder": "",
          "prefix": "",
          "customClass": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "tableView": true,
          "labelPosition": "top",
          "labelWidth": 30,
          "labelMargin": 3,
          "description": "",
          "errorLabel": "fdsfdsf",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "disabled": false,
          "autofocus": false,
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": ""
          },
          "id": "el2dc9s"
        },
        {
          "type": "button",
          "label": "Submit",
          "key": "submit",
          "disableOnInvalid": true,
          "theme": "primary",
          "input": true,
          "placeholder": "",
          "prefix": "",
          "customClass": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": false,
          "hidden": false,
          "clearOnHide": true,
          "tableView": true,
          "labelPosition": "top",
          "labelWidth": 30,
          "labelMargin": 3,
          "description": "",
          "errorLabel": "",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "disabled": false,
          "autofocus": false,
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": ""
          },
          "size": "md",
          "leftIcon": "",
          "rightIcon": "",
          "block": false,
          "action": "submit",
          "id": "e0xjkzm"
        }
      ]
    };
  }

  onSubmit(requestSubmission: any): void {
    console.log(requestSubmission);
  }

}
