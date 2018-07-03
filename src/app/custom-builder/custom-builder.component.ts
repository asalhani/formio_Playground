import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Formio } from 'formiojs';


@Component({
  selector: 'app-custom-builder',
  templateUrl: './custom-builder.component.html'
})
export class CustomBuilderComponent implements OnInit {

  @ViewChild('builder') builderElement?: ElementRef;

  formJson: any = {
    components: []
  };
  constructor() { }

  ngOnInit() {
    this.renderBuilder();
  }

  renderBuilder() {
    Formio.builder(this.builderElement.nativeElement, this.formJson, {
      builder: {
        ElmControls: {
          title: 'Elm Controls',
          weight: 10,
          components: {
            datepicker: {
              title: 'Datepicker',
              key: 'datepicker',
              icon: 'fa fa-terminal',
              schema: {
                type: 'datepicker',
                label: 'Datepicker',
                key: 'datepicker',
              }
            }
          }
        }
      }
    }).then(function (builder) {
      builder.on('saveComponent', function () {
        console.log(builder.schema);
      });
    });
  }
}
