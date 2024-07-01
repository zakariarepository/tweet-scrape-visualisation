import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordSectionComponent } from './key-word-section.component';

describe('KeyWordSectionComponent', () => {
  let component: KeyWordSectionComponent;
  let fixture: ComponentFixture<KeyWordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyWordSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyWordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
