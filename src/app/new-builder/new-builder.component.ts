import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-new-builder',
  templateUrl: './new-builder.component.html',
  styleUrls: ['./new-builder.component.css']
})
export class NewBuilderComponent implements OnInit {

  @ViewChild('builder') builderElement?: ElementRef;
  formJson: any = {
    components: []
      };


  constructor() { }

  ngOnInit() {
    Formio.builder(this.builderElement.nativeElement, this.formJson);
  }

}
