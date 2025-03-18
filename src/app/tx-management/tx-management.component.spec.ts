import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxManagementComponent } from './tx-management.component';

describe('TxManagementComponent', () => {
  let component: TxManagementComponent;
  let fixture: ComponentFixture<TxManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
