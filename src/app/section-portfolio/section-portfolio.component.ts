
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
      "name": "El Polo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["Angular", "JavaScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "El Polo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["JavaScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "El Polo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["JavaScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    },
    {
      "name": "El Polo Loco",
      "description": "A simple Jump-and-Run game based od an object-orient appoach. Help Pepe to find coins and poison bottles to fight against the great El Polo Loco.",
      "image": "el-pollo-loco.png",
      "technics": ["JavaScript", "HTML", "CSS"],
      "projectUrl": "https://www.andreas-bandusch.de",
      "gitHubUrl": "https://github.com/AndreasBandusch/el-pollo-loco"
    }

  ];
}
