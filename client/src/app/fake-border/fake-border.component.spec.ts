import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBorderComponent } from './fake-border.component';

describe('FakeBorderComponent', () => {
  let component: FakeBorderComponent;
  let fixture: ComponentFixture<FakeBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
