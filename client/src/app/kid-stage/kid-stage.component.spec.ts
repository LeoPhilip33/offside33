import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidStageComponent } from './kid-stage.component';

describe('KidStageComponent', () => {
  let component: KidStageComponent;
  let fixture: ComponentFixture<KidStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
