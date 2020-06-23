import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  regions: { name: string }[] = [{ name: 'Asia' }, { name: 'Europe' }];
  countries: { name: string }[] = [];
  constructor(private readonly countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountriesObservable().subscribe(data => {
      data.map(country => {
        this.countries.push({ name: country.name });
      });
    });

  }
}
