import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResReportComponent } from './res-report.component';

describe('ResReportComponent', () => {
  let component: ResReportComponent;
  let fixture: ComponentFixture<ResReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResReportComponent]
    });
    fixture = TestBed.createComponent(ResReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
