import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXComponent } from './form-x.component';

describe('FormXComponent', () => {
  let component: FormXComponent;
  let fixture: ComponentFixture<FormXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
