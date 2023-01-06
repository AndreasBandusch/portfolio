
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
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "join.png",
      "technics": ["Angular", "JavaScript", "HTML", "CSS"],
      "projectUrl": "https://join.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "El Pollo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["JavaScript", "HTML", "CSS"],
      "projectUrl": "https://el-pollo-loco.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "Portfolio",
      "description": "My public portfolio website created with Angular.",
      "image": "portfolio.png",
      "technics": ["JavaScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/portfolio"
    },

    {
      "name": "Pokedex",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "pokedex.png",
      "technics": ["JavaScript", "Rest-Api", "HTML", "CSS"],
      "projectUrl": "https://pokedex.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "Ring of Fire",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "ring-of-fire.jpg",
      "technics": ["Angular", "TypeScript", "Firebase", "HTML", "CSS"],
      "projectUrl": "https://ring-of-fire.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    }

  ];
}
