import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jv-top-ten-cities',
  templateUrl: './top-ten-cities.page.html',
  styleUrls: ['./top-ten-cities.page.scss']
})
export class TopTenCitiesPage implements OnInit {

  dataCities = [
    { pos: 1, id: 2761369, src: "assets/imgs/viena.jpg" }, //vienna
    { pos: 2, id: 2657896, src: "assets/imgs/zurique.jpg" }, //zurich
    { pos: 3, id: 6173331, src: "assets/imgs/vancouver.jpg" }, //vancouver
    { pos: 4, id: 2867714, src: "assets/imgs/munique.jpg" }, //munich,
    { pos: 5, id: 2158177, src: "assets/imgs/melbourne.png" }, //melbourne,
    { pos: 6, id: 2193733, src: "assets/imgs/auckland.jpg" }, // Auckland
    { pos: 7, id: 2147714, src: "assets/imgs/sydney.jpg" }, // Sydnei
    { pos: 8, id: 2618425, src: "assets/imgs/copenhague.jpg" }, // Copenhagem
    { pos: 9, id: 6167865, src: "assets/imgs/toronto.jpg" }, // Toronto
    { pos: 10, id: 3471039, src: "assets/imgs/balneario-bamboriu.png" }, // Balneario
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
