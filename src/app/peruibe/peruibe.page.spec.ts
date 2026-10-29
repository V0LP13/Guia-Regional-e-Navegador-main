import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeruibeionicPage } from './peruibeionic.page';

describe('PeruibeionicPage', () => {
  let component: PeruibeionicPage;
  let fixture: ComponentFixture<PeruibeionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruibeionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
