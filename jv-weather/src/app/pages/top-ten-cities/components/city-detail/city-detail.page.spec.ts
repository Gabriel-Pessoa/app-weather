import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailPage } from './city-detail.page';

describe('CityDetailPage', () => {
  let component: CityDetailPage;
  let fixture: ComponentFixture<CityDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
