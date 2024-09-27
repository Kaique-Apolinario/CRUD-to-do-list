import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReturnButtonsComponent } from './submit-return-buttons.component';

describe('SubmitReturnButtonsComponent', () => {
  let component: SubmitReturnButtonsComponent;
  let fixture: ComponentFixture<SubmitReturnButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitReturnButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitReturnButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
