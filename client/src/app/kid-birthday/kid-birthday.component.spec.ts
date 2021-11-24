import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidBirthdayComponent } from './kid-birthday.component';

describe('KidBirthdayComponent', () => {
  let component: KidBirthdayComponent;
  let fixture: ComponentFixture<KidBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
