import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalIndicationComponent } from './geographical-indication.component';

describe('GeographicalIndicationComponent', () => {
  let component: GeographicalIndicationComponent;
  let fixture: ComponentFixture<GeographicalIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicalIndicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicalIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
