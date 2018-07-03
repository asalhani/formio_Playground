import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-datepicker-formio-custom',
  templateUrl: './test-datepicker-formio-custom.component.html',
  styleUrls: ['./test-datepicker-formio-custom.component.css']
})
export class TestDatepickerFormioCustomComponent implements OnInit {
  ngOnInit(): void {
  }

  data: any;
  myForm: any;
  customCompForm: any;

  constructor() {
    this.data = { date: { calendarType: 'Gregorian', date: '1/1/2000' } };

    // // Datepicker2
    
    this.customCompForm = {
      "components": [
        {
          "key": "datepicker",
          "type": "datepicker",
          "autofocus": true,
          "label": "xxxx",
          "tableView": false,
          "input": true,
          "clearOnHide": true,
          "persistent": true,
          "protected": false,
          'html': '<h1>This is a test</h1>\n',
          "fields": {
            "calendarType": {
              "label": "Calendar Type",
              "required": true,
              "placeholder": "-- select calendar Type --",
              "type": "select"
            },
            "date": {
              "label": "Date",
              "required": true,
              "placeholder": "Select date",
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
