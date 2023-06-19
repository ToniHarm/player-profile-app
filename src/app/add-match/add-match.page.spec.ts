import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMatchPage } from './add-match.page';

describe('AddMatchPage', () => {
  let component: AddMatchPage;
  let fixture: ComponentFixture<AddMatchPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(AddMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
