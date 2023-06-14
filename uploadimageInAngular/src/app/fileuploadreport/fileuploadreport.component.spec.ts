import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadreportComponent } from './fileuploadreport.component';

describe('FileuploadreportComponent', () => {
  let component: FileuploadreportComponent;
  let fixture: ComponentFixture<FileuploadreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuploadreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileuploadreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
