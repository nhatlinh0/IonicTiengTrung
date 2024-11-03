import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThoigianPage } from './thoigian.page';

describe('ThoigianPage', () => {
  let component: ThoigianPage;
  let fixture: ComponentFixture<ThoigianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoigianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
