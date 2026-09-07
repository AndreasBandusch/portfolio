import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.less',
})
export class Footer {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
