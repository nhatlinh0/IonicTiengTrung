import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhongcanhPage } from './phongcanh.page';

describe('PhongcanhPage', () => {
  let component: PhongcanhPage;
  let fixture: ComponentFixture<PhongcanhPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongcanhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
