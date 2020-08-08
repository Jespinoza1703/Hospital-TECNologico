import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-evaluation',
  templateUrl: './patient-evaluation.component.html',
  styleUrls: ['./patient-evaluation.component.scss']
})
export class PatientEvaluationComponent implements OnInit {

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor() { }

  ngOnInit(): void {
  }

}
