import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDescriptionComponent } from './emp-description.component';

describe('EmpDescriptionComponent', () => {
  let component: EmpDescriptionComponent;
  let fixture: ComponentFixture<EmpDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
