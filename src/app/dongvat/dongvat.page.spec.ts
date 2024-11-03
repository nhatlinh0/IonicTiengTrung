import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DongvatPage } from './dongvat.page';

describe('DongvatPage', () => {
  let component: DongvatPage;
  let fixture: ComponentFixture<DongvatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DongvatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
