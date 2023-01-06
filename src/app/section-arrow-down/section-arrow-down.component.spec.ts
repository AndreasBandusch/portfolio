import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionArrowDownComponent } from './section-arrow-down.component';

describe('SectionArrowDownComponent', () => {
  let component: SectionArrowDownComponent;
  let fixture: ComponentFixture<SectionArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionArrowDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
