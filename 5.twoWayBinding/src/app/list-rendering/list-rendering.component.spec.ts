import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRenderingComponent } from './list-rendering.component';

describe('ListRenderingComponent', () => {
  let component: ListRenderingComponent;
  let fixture: ComponentFixture<ListRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRenderingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
