import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLastChildComponent } from './second-last-child.component';

describe('SecondLastChildComponent', () => {
  let component: SecondLastChildComponent;
  let fixture: ComponentFixture<SecondLastChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLastChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLastChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
