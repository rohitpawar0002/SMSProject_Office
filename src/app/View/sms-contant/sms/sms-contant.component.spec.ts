import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsContantComponent } from './sms-contant.component';

describe('SmsContantComponent', () => {
  let component: SmsContantComponent;
  let fixture: ComponentFixture<SmsContantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsContantComponent]
    });
    fixture = TestBed.createComponent(SmsContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
