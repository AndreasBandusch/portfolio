import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-arrow-down',
  templateUrl: './section-arrow-down.component.html',
  styleUrls: ['./section-arrow-down.component.scss']
})
export class SectionArrowDownComponent implements OnInit {
  @Input() direction: string
  @Input() arrowAnimation: string;
  arrowSpeed: number = 125;
  arrowOffset: number = 250;
  otherDirection: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setDirection();
  }

  setDirection() {
    (this.direction ? this.otherDirection = true : this.otherDirection = false);
  }

}
