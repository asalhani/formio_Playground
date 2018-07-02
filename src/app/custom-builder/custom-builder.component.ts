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
          }
        }
      }
    });
  }

}
