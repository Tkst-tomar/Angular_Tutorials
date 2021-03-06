import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedDataComponent } from './fetched-data.component';

describe('FetchedDataComponent', () => {
  let component: FetchedDataComponent;
  let fixture: ComponentFixture<FetchedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
