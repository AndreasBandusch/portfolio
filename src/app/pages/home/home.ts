import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ProjectList } from './project-list/project-list';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { ContactBand } from './contact-band/contact-band';

@Component({
  selector: 'app-home',
  imports: [Hero, ProjectList, About, Skills, ContactBand],
  templateUrl: './home.html',
})
export class Home {}
