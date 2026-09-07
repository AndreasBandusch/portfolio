import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.html',
  styleUrl: './project-list.less',
})
export class ProjectList {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
