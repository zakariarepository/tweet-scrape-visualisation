import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyWordSectionComponent } from './key-word-section/key-word-section.component';

import { HttpClientModule } from '@angular/common/http';
import { TweetsSectionComponent } from './tweets-section/tweets-section.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    KeyWordSectionComponent,
    TweetsSectionComponent,
    PieChartComponent,
    BarChartComponent,
    TimelineChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
