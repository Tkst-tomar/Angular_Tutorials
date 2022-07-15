import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsecondComponent } from './childsecond.component';

describe('ChildsecondComponent', () => {
  let component: ChildsecondComponent;
  let fixture: ComponentFixture<ChildsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
