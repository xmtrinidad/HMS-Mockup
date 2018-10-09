import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetReportSectionComponent } from './budget-report-section.component';

describe('BudgetReportSectionComponent', () => {
  let component: BudgetReportSectionComponent;
  let fixture: ComponentFixture<BudgetReportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetReportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetReportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
