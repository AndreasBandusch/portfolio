import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.less',
})
export class About {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
