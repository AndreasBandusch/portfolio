
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent {
  numberOfProjects: number;
  projects: any = [
    {
      "name": "Join",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. Log in as a guest and feel free to try everything.",
      "image": "join.png",
      "technics": ["Angular", "TypeScript", "Firebase", "Material Design Drag & Drop CDK"],
      "projectUrl": "https://join.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/join"
    },
    {
      "name": "El Pollo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["JavaScript", "OOP", "HTML", "CSS"],
      "projectUrl": "https://el-pollo-loco.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "Portfolio",
      "description": "My public portfolio website created with Angular. Do you like my portfolio website? Feel free to take a look behind the scenes on Github.",
      "image": "portfolio.png",
      "technics": ["Angular", "TypeScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/portfolio"
    },

    {
      "name": "Pokedex",
      "description": "Based on the PokéAPI a simple library that provides and catalogues pokemon information. Build with REST API and JavaScript.",
      "image": "pokedex.png",
      "technics": ["JavaScript", "Api", "HTML", "CSS"],
      "projectUrl": "https://pokedex.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/pokedex"
    },
    {
      "name": "Ring of Fire",
      "description": "An Angular based version of the popular drinking game. Share the URL with your friends after starting a new game to play a multiplayer game together.",
      "image": "ring-of-fire.jpg",
      "technics": ["Angular", "TypeScript", "Firebase", "Material Design"],
      "projectUrl": "https://ring-of-fire.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/ring-of-fire"
    }

  ];
}
