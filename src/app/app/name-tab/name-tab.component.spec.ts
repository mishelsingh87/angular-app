import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTabComponent } from './name-tab.component';

describe('NameTabComponent', () => {
  let component: NameTabComponent;
  let fixture: ComponentFixture<NameTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
