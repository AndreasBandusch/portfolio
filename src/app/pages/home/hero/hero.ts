import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.less',
})
export class Hero {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
