import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionAboutMeComponent } from './section-about-me/section-about-me.component';
import { SectionMySkillsComponent } from './section-my-skills/section-my-skills.component';
import { SectionArrowDownComponent } from './section-arrow-down/section-arrow-down.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionContactMeComponent } from './section-contact-me/section-contact-me.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { SectionBottomComponent } from './section-bottom/section-bottom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { MenuOpenComponent } from './menu-open/menu-open.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionTopComponent,
    SectionAboutMeComponent,
    SectionMySkillsComponent,
    SectionArrowDownComponent,
    SectionPortfolioComponent,
    SectionContactMeComponent,
    PortfolioProjectComponent,
    SectionFooterComponent,
    SectionBottomComponent,
    MainComponent,
    ImpressumComponent,
    DatenschutzComponent,
    MenuOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
