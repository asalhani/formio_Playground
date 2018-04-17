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
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { CustomControlWithTemplateComponent } from './custom-control-with-template/custom-control-with-template.component';
import { YaqeenControlWithTemplateComponent } from './custom-control-with-template/yaqeenControlWithTemplate';
import { FormioTeasterComponent } from './formio-teaster/formio-teaster.component';


const appRoutes: Routes = [
  { path: 'form', component: TestFormComponent },
  { path: 'customwithtemplate', component: CustomControlWithTemplateComponent },
  { path: 'custom', component: CustomControlComponent },
  { path: 'learn', component: LearningResourcesComponent },
  { path: 'fteaster', component: FormioTeasterComponent}
  // { path: '**', component: CustomControlComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CustomControlComponent,
    LearningResourcesComponent,
    CustomControlWithTemplateComponent,
    FormioTeasterComponent
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
    Formio.registerComponent('yaqeenControlWithTemplate', YaqeenControlWithTemplateComponent);

  }
}
