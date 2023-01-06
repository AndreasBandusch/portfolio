import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuControlService {

  constructor() { }
  menuIsOpen = false;

  toggleMenu() {
    if (this.menuIsOpen === false) {
      this.menuIsOpen = true;
      this.setOrRemoveBodyScroll();
    } else {
      this.menuIsOpen = false;
      this.setOrRemoveBodyScroll();
    }
  }


  setOrRemoveBodyScroll() {
    const bodyTag = document.body;
    if (this.menuIsOpen) {
      bodyTag.classList.add('no-scroll');
    } else {
      bodyTag.classList.remove('no-scroll');
    }
  }


  closeMenu() {
    this.menuIsOpen = false;
    this.setOrRemoveBodyScroll();
  }
}
