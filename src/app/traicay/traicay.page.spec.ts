import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraicayPage } from './traicay.page';

describe('TraicayPage', () => {
  let component: TraicayPage;
  let fixture: ComponentFixture<TraicayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraicayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
