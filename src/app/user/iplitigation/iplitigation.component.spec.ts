import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplitigationComponent } from './iplitigation.component';

describe('IplitigationComponent', () => {
  let component: IplitigationComponent;
  let fixture: ComponentFixture<IplitigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplitigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IplitigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
