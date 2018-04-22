import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-control-with-template',
  templateUrl: './custom-control-with-template.component.html'
})
export class CustomControlWithTemplateComponent implements OnInit {

  customCompFormWithTemplate: any;
  constructor() {

    this.customCompFormWithTemplate = {
      components: [
        {
          isNew: true,
          key: 'yaqeenControlWithTemplateCtr',
          type: 'yaqeenControlWithTemplate',
          autofocus: true,
          label: 'custom comp. title',
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
  }

  ngOnInit() {
  }


  onSubmit(requestSubmission: any): void {
    console.log(requestSubmission);
  }

}
