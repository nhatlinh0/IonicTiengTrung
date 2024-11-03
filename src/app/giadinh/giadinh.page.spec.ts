import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiadinhPage } from './giadinh.page';

describe('GiadinhPage', () => {
  let component: GiadinhPage;
  let fixture: ComponentFixture<GiadinhPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiadinhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
