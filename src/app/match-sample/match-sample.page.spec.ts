import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchSamplePage } from './match-sample.page';

describe('MatchSamplePage', () => {
  let component: MatchSamplePage;
  let fixture: ComponentFixture<MatchSamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchSamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
