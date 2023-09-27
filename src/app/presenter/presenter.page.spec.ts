import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresenterPage } from './presenter.page';

describe('PresenterPage', () => {
  let component: PresenterPage;
  let fixture: ComponentFixture<PresenterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
