import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CauthongdungPage } from './cauthongdung.page';

describe('CauthongdungPage', () => {
  let component: CauthongdungPage;
  let fixture: ComponentFixture<CauthongdungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CauthongdungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
