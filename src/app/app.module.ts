import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './add-training/add-training.component';

@NgModule({
  declarations: [AppComponent, TrainingComponent, AddTrainingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
