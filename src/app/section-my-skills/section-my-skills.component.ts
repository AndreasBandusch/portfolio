import { Component } from '@angular/core';


@Component({
  selector: 'app-section-my-skills',
  templateUrl: './section-my-skills.component.html',
  styleUrls: ['./section-my-skills.component.scss'],
})
export class SectionMySkillsComponent {
  skills = [
    {
      'image': 'angular-icon.png',
      'title': 'Angular'
    },
    {
      'image': 'typescript-icon.png',
      'title': 'Typescript'
    },
    {
      'image': 'javascript-icon.png',
      'title': 'Javascript'
    },
    {
      'image': 'html-icon.png',
      'title': 'HTML'
    },
    {
      'image': 'css-icon.png',
      'title': 'CSS'
    },
    {
      'image': 'firebase-icon.png',
      'title': 'Firebase'
    },
    {
      'image': 'git-icon.png',
      'title': 'Git'
    },
    {
      'image': 'scrum-icon.png',
      'title': 'Scrum'
    },
    {
      'image': 'api-icon.png',
      'title': 'Rest-Api'
    },
    {
      'image': 'material-icon.png',
      'title': 'Material Design'
    },

  ];
} 
