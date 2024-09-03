import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormYComponent } from './form-y.component';

describe('FormYComponent', () => {
  let component: FormYComponent;
  let fixture: ComponentFixture<FormYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
