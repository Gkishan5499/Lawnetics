import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberLawComponent } from './cyber-law.component';

describe('CyberLawComponent', () => {
  let component: CyberLawComponent;
  let fixture: ComponentFixture<CyberLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
