import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VanphongPage } from './vanphong.page';

describe('VanphongPage', () => {
  let component: VanphongPage;
  let fixture: ComponentFixture<VanphongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VanphongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
