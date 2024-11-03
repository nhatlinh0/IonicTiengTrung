import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BothuhanthuPage } from './bothuhanthu.page';

describe('BothuhanthuPage', () => {
  let component: BothuhanthuPage;
  let fixture: ComponentFixture<BothuhanthuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BothuhanthuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
