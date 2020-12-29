import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenCitiesPage } from './top-ten-cities.page';

describe('TopTenCitiesPage', () => {
  let component: TopTenCitiesPage;
  let fixture: ComponentFixture<TopTenCitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenCitiesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenCitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
