import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DouongPage } from './douong.page';

describe('DouongPage', () => {
  let component: DouongPage;
  let fixture: ComponentFixture<DouongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DouongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
