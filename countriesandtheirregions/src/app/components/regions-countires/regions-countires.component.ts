import { Component, OnInit, Input, ViewChild, ContentChild } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-regions-countries',
  templateUrl: './regions-countires.component.html',
  styleUrls: ['./regions-countires.component.scss']
})
export class RegionsCountriesComponent implements OnInit {

  selected = '';
  @Input() labelForDropDown: string;
  @Input() selectedCategoryText: string;
  @Input() headerText: string;
  @Input() values: {name: string}[];
  countries: Country[] = [];

  constructor(private readonly countriesService: CountriesService) { }

  ngOnInit() {
  }

  getValues(region: string){
    if(this.headerText == "Region"){
      this.countriesService.getCountriesFromRegion(region).subscribe((data:Country[] )=> {
        data.map(country => {
          let countryObject = {
            name: country.name,
            capital: country.capital,
            region: country.region,
            subregion: country.subregion,
            population: country.population,
            area: country.area,
            flag: country.flag,
            currencies:country.currencies
          }
          this.countries.push(countryObject);
        });
        this.countriesService.sendValuesToCountriesObservable(this.countries);
      });
    }else {
      console.log(region);
      console.log(this.countriesService.getCountryByName(region));
    }
    
  }

}
