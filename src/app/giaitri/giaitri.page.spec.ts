import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiaitriPage } from './giaitri.page';

describe('GiaitriPage', () => {
  let component: GiaitriPage;
  let fixture: ComponentFixture<GiaitriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaitriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
