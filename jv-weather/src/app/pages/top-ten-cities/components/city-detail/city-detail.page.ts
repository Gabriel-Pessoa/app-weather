import { Component, Input, OnInit } from '@angular/core';
import { CityTopTen } from 'src/app/shared/models/city-top-ten.model';
import { responseToCityTopTen } from 'src/app/shared/utils/response.utils';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Units } from 'src/app/shared/models/units.enum';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';

@Component({
  selector: 'jv-city-detail',
  templateUrl: './city-detail.page.html',
  styleUrls: ['./city-detail.page.scss'],
})
export class CityDetailPage implements OnInit {

  @Input() cityId: string;
  @Input() position: number;
  @Input() unit: Units;
  @Input() src: string;

  dataCity: CityTopTen = {
    cityName: '',
    country: '',
    temp: '',
    sensation: '',
    humidity: '',
    windSpeed: ''
  };


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.getCityWeatherById(this.cityId).subscribe(response => {
      this.dataCity = responseToCityTopTen(response);
    });

  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }

}
