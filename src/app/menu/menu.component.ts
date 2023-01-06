
import { Component } from '@angular/core';
import { MenuControlService } from '../menu-control.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public menu: MenuControlService) { }

  setMenuStatus() {
    this.menu.toggleMenu();
  }
}
