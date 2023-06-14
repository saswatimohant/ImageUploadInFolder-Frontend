import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualPanelComponent } from './dual-panel.component';

describe('DualPanelComponent', () => {
  let component: DualPanelComponent;
  let fixture: ComponentFixture<DualPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
