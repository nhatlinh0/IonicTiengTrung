import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamxucPage } from './camxuc.page';

describe('CamxucPage', () => {
  let component: CamxucPage;
  let fixture: ComponentFixture<CamxucPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamxucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
