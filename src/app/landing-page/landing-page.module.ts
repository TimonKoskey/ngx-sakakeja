import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LatestPropertiesComponent } from './latest-properties/latest-properties.component';
import {LandingPageComponent} from './landing-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    LatestPropertiesComponent,
    LandingPageComponent,
    SearchFormComponent,
  ]
})
export class LandingPageModule { }
