import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsCountriesComponent } from './regions-countires.component';

describe('RegionsCountiresComponent', () => {
  let component: RegionsCountriesComponent;
  let fixture: ComponentFixture<RegionsCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
