import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Units } from 'src/app/shared/models/units.enum';
import { AppState } from 'src/app/shared/state/app.reducer';

import { selectUnitConfig } from 'src/app/shared/state/config/config.selectors';


@Component({
  selector: 'jv-top-ten-cities',
  templateUrl: './top-ten-cities.page.html',
  styleUrls: ['./top-ten-cities.page.scss']
})

export class TopTenCitiesPage implements OnInit {

  topTenCities = [
    { pos: 1, id: '2761369', src: "assets/imgs/viena.jpg" }, //Vienna
    { pos: 2, id: '2657896', src: "assets/imgs/zurique.jpg" }, //Zurich
    { pos: 3, id: '6173331', src: "assets/imgs/vancouver.jpg" }, //Vancouver
    { pos: 4, id: '2867714', src: "assets/imgs/munique.jpg" }, //Munich,
    { pos: 5, id: '2158177', src: "assets/imgs/melbourne.jpg" }, //Melbourne,
    { pos: 6, id: '2193733', src: "assets/imgs/auckland.jpg" }, // Auckland
    { pos: 7, id: '2147714', src: "assets/imgs/sydney.jpg" }, // Sydnei
    { pos: 8, id: '2618425', src: "assets/imgs/copenhague.jpg" }, // Copenhagem
    { pos: 9, id: '6167865', src: "assets/imgs/toronto.jpg" }, // Toronto
    { pos: 10, id: '3471039', src: "assets/imgs/balneario-camboriu.jpg" }, // Balneario 
  ];

  unit$: Observable<Units>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.unit$ = this.store.pipe(select(selectUnitConfig));
  }
  
}
