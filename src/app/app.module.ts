import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule} from '@angular/material';
import { OverviewSectionComponent } from './overview-section/overview-section.component';
import { BudgetReportSectionComponent } from './budget-report-section/budget-report-section.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewSectionComponent,
    BudgetReportSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
