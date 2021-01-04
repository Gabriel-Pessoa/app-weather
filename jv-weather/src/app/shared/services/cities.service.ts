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

  // função de tratamento de erro
  handleError(e: any): Observable<any> {
    console.log(e) // mostra erro detalhado no console
    return EMPTY; // observable vazio.
  }
}