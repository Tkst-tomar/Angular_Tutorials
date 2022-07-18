import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFirstComponent } from './child-first.component';

describe('ChildFirstComponent', () => {
  let component: ChildFirstComponent;
  let fixture: ComponentFixture<ChildFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
