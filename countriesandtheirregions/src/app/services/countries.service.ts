import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Country } from '../models/country';
import { tap, map, filter } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  headers: any;
  private countries$ = new Subject<Country[]>();
  private countries: Country[] = [];
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   }

  getCountriesFromRegion(region: string): Observable<Country[]> {
    const endpoint = "https://restcountries.eu/rest/v2/region/" + region;
    return this.http
      .get<Country[]>(
        endpoint
      ).pipe(
        tap(
          (event) => this.handleResponse(endpoint, event),
          (error) => this.handleError(endpoint, error)
        )
      );
  }

  getCountriesObservable(){
    return this.countries$.asObservable();
  }

  getCountryByName(countryName: string){
    let countryByName;
    this.countries.filter(country => {
      if(countryName === country.name){
        countryByName = country;
      }
    })
    return countryByName;
  }

  sendValuesToCountriesObservable(countries: Country[]){
    this.countries = countries;
    this.countries$.next(countries);
  }

  handleResponse(reqUrl: string, event) {
    if (event instanceof HttpResponse) {
      console.log("Request for ", reqUrl,
        " Response Status ", event.status,
        " With body ", event
      );
    }
  }

  handleError(reqUrl: string, event) {
    console.error("Request for ", reqUrl,
      " Response Status ", event.status,
      " With error ", event.error
    );
  }
}
