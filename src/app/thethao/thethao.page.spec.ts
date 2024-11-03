import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThethaoPage } from './thethao.page';

describe('ThethaoPage', () => {
  let component: ThethaoPage;
  let fixture: ComponentFixture<ThethaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThethaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
