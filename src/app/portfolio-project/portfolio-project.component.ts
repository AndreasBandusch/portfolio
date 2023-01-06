import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  @Input() numberOfAllProjects: number;
  @Input() currentProjectNumber: number;
  @Input() project: any;
  otherDirection: boolean = false;
  outputNumberOfAllProjects: string;
  outputCurrentProjectNumber: string;
  direction: string;

  constructor() { }

  ngOnInit(): void {
    this.setLeadingZero();
    this.setDirection();
    this.setAnimationCssClass();
  }

  setAnimationCssClass() {
    if (this.otherDirection) this.direction = 'other-direction';
  }

  setLeadingZero() {
    this.outputNumberOfAllProjects = '0' + this.numberOfAllProjects;
    this.outputCurrentProjectNumber = '0' + this.currentProjectNumber;
  }

  setDirection() {
    (this.currentProjectNumber % 2 !== 0 ? this.otherDirection = false : this.otherDirection = true);
  }
}
