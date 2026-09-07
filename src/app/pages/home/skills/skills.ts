import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.less',
})
export class Skills {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
