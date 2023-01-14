import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-project';
  name = '';
  desc = '';
  trainings: [{ trainingName: string; trainingDesc: string }] = [
    { trainingName: '', trainingDesc: '' },
  ];
  // @ViewChild('childName') chieldName: ElementRef;
  onAddTraining() {
    this.trainings.push({ trainingName: this.name, trainingDesc: this.desc });
  }
}
