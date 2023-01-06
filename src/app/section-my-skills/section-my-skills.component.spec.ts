import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMySkillsComponent } from './section-my-skills.component';

describe('SectionMySkillsComponent', () => {
  let component: SectionMySkillsComponent;
  let fixture: ComponentFixture<SectionMySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMySkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
