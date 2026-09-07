import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'kontakt', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: 'impressum', loadComponent: () => import('./pages/imprint/imprint').then((m) => m.Imprint) },
  { path: 'datenschutz', loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy) },
];
