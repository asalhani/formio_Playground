import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { TestFormComponent } from './allControlSamples/test-form.component';
import { Formio } from 'formiojs/dist/formio.full';
import { YaqeenControlComponent } from './custom-control/yaqeenControl';
import FormioUtils from 'formiojs/utils';
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


const appRoutes: Routes = [
  { path: 'form', component: TestFormComponent }, 
  // { path: 'custom', component: CustomControlComponent },
  { path: 'learn', component: LearningResourcesComponent },
  // { path: 'fteaster', component: FormioTeasterComponent },
  // { path: 'compRes', component: FormWithResourcesComponent }
  { path: 'builder', component: NewBuilderComponent }
  // { path: '**', component: CustomControlComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CustomControlComponent,
    LearningResourcesComponent,
    FormioTeasterComponent,
    FormWithResourcesComponent,
    NewBuilderComponent
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
    EspFormioAuthService,
    HtmlLoaderService,
    FormioAuthService,
    { provide: FormioAppConfig, useValue: AppConfig },
    { provide: FormioAuthConfig, useValue: AuthConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
    // Formio.registerComponent('yaqeenControl', YaqeenControlComponent);
  }
}
