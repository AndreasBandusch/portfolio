import { Component } from '@angular/core';
import { MenuControlService } from './menu-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public menu: MenuControlService) { }
}



