import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoctuvungPage } from './hoctuvung.page';

describe('HoctuvungPage', () => {
  let component: HoctuvungPage;
  let fixture: ComponentFixture<HoctuvungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HoctuvungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
