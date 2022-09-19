import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCommercializationComponent } from './ip-commercialization.component';

describe('IpCommercializationComponent', () => {
  let component: IpCommercializationComponent;
  let fixture: ComponentFixture<IpCommercializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpCommercializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCommercializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
