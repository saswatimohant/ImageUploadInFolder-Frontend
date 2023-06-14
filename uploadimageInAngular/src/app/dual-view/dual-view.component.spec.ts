import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualViewComponent } from './dual-view.component';

describe('DualViewComponent', () => {
  let component: DualViewComponent;
  let fixture: ComponentFixture<DualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
