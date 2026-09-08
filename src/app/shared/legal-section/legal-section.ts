import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentBlock } from '../../core/language/language.types';

@Component({
  selector: 'app-legal-section',
  imports: [RouterLink],
  templateUrl: './legal-section.html',
  styleUrl: './legal-section.less',
})
export class LegalSection {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly note = input.required<string>();
  readonly navItems = input.required<string[]>();
  readonly blocks = input.required<ContentBlock[]>();
}
