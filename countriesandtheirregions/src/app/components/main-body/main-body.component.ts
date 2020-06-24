import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  regions: { name: string }[] = [{ name: 'Asia' }, { name: 'Europe' }];
  countries: { name: string }[] = [];
  currentCountry: Country;
  region: string;
  constructor(private readonly countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountriesObservable().subscribe(data => {
      data.map(country => {
        this.countries.push({ name: country.name });
      });
    });
    this.countriesService.getRegionObservable().subscribe((region: string) => {
      this.region = region;
      this.currentCountry = this.countriesService.getCountryByName(this.region);
    });
    
  }


}
