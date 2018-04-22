import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html'
})
export class LearningResourcesComponent implements OnInit {

  constructor() { }

  inputText: string;
  ngOnInit() {
    this.inputText = 'adib value';
  }

}
