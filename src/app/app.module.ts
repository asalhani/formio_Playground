import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { TestFormComponent } from './allControlSamples/test-form.component';
import { YaqeenControlComponent } from './custom-control/yaqeenControl';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { FormioTeasterComponent } from './formio-teaster/formio-teaster.component';
import { ServiceLocator } from './services/locator.service';
import { HttpModule } from '@angular/http';
import { HtmlLoaderService } from './services/HtmlLoader.service';
import { FormWithResourcesComponent } from './form-with-resources/form-with-resources.component';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioResourceConfig } from 'angular-formio/resource';
import { HttpClientModule } from '@angular/common/http';
import { EspFormioAuthService } from './services/formioAuth.service';
import { AppConfig, AuthConfig } from './form-io-app-config';
import { NewBuilderComponent } from './new-builder/new-builder.component';
import { TestDatepickerFormioCustomComponent } from './test-datepicker-formio-custom/test-datepicker-formio-custom.component';
import { Formio } from 'formiojs';
import { Datepicker } from './formioCustomControls/datepicker/datepicker-control';
import { CustomBuilderComponent } from './custom-builder/custom-builder.component';


const appRoutes: Routes = [
  { path: 'form', component: TestFormComponent },
  // { path: 'custom', component: CustomControlComponent },
  { path: 'learn', component: LearningResourcesComponent },
  // { path: 'fteaster', component: FormioTeasterComponent },
  // { path: 'compRes', component: FormWithResourcesComponent }
  { path: 'builder', component: NewBuilderComponent },
  { path: 'datepicker', component: TestDatepickerFormioCustomComponent },
  { path: 'custombuilder', component: CustomBuilderComponent },
  { path: '**', component: TestDatepickerFormioCustomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CustomControlComponent,
    LearningResourcesComponent,
    FormioTeasterComponent,
    FormWithResourcesComponent,
    NewBuilderComponent,
    TestDatepickerFormioCustomComponent,
    CustomBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    // EspFormioAuthService,
    // HtmlLoaderService,
    // FormioAuthService,
    // { provide: FormioAppConfig, useValue: AppConfig },
    // { provide: FormioAuthConfig, useValue: AuthConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    //ServiceLocator.injector = this.injector;
    // Formio.registerComponent('Datepicker', Datepicker);
  }
}
