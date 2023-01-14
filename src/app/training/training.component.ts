import { Component, Input } from '@angular/core';

@Component({
  selector: 'training-app',
  templateUrl: 'training.component.html',
  styleUrls: ['training.component.css'],
})
export class TrainingComponent {
  @Input() myTraining: { trainingName: string; trainingDesc: string } = {
    trainingName: '',
    trainingDesc: '',
  };
}
