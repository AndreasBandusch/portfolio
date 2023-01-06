import { Component } from '@angular/core';
import { MenuControlService } from '../menu-control.service';


@Component({
  selector: 'app-menu-open',
  templateUrl: './menu-open.component.html',
  styleUrls: ['./menu-open.component.scss']
})
export class MenuOpenComponent {

  constructor(public menu: MenuControlService) { }
}
