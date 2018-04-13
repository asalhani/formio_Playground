import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormioModule } from 'angular-formio';

import { AppComponent } from './app.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { TestFormComponent } from './allControlSamples/test-form.component';
import { Formio } from 'formiojs/full';
import { YaqeenControlComponent } from './custom-control/yaqeenControl';
import FormioUtils from 'formiojs/utils';


const appRoutes: Routes = [
  { path: 'form', component: TestFormComponent },
  { path: 'custom', component: CustomControlComponent },
  { path: '**', component: CustomControlComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CustomControlComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Formio.registerComponent('yaqeenControl', YaqeenControlComponent);

    
  } 
}
