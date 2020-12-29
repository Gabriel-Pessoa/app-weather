import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jsSearch from 'js-search';

import { CityTypeaheadItem } from '../models/city-typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  baseUrl = 'http://localhost:8080/cities.json';

  constructor(private http: HttpClient) {
  }

  // Obtem as cidades para o autocomplete
  getCities(query: string): Observable<CityTypeaheadItem[]> {
    /*
    return this.http.get<{country: string}[]>('assets/db/cities.json')
      .pipe(
        map(cities => {
          const search = new jsSearch.Search('geonameid');
          search.addIndex('country');
          search.addIndex('name');
          search.addDocuments(cities);
          return search.search(query);
        }),
      );
      */
     return this.http.get<{country: string}[]>(this.baseUrl)
      .pipe(
        map(cities => {
          const search = new jsSearch.Search('geonameid');
          search.addIndex('country');
          search.addIndex('name');
          search.addDocuments(cities);
          return search.search(query);
        }),
        catchError(e => this.handleError(e))
      );
  }

  getCityById(id: number): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.apiKey}&units=metric&lang=pt_br`)
    .pipe(
      map(city => {
        return {
          cityName: city.name,
          country: city.sys.country,
          temp: city.main.temp,
          sensation: city.main.feels_like,
          humidity: city.main.humidity,
          windSpeed: city.wind.speed,
        }
      }),
      catchError(e => this.handleError(e))
    );
  }
  // função de tratamento de erro
  handleError(e: any): Observable<any> {
    console.log(e) // mostra erro detalhado no console
    return EMPTY; // observable vazio.
  }
}