import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent {
  name = '';
  desc = '';
  @Output() addTraining = new EventEmitter<{
    trainingName: string;
    trainingDesc: string;
  }>();
  onAddTraining() {
    this.addTraining.emit({ trainingName: this.name, trainingDesc: this.desc });
  }
}
