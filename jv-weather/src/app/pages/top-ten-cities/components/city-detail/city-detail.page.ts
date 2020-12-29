import { CitiesService } from './../../../../shared/services/cities.service';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'jv-city-detail',
  templateUrl: './city-detail.page.html',
  styleUrls: ['./city-detail.page.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailPage implements OnInit {

  @Input() cityId;
  @Input() position;
  @Input() src;

  dataCity = {
    cityName: '',
    country: '',
    temp: '',
    sensation: '',
    humidity: '',
    windSpeed: '',
  };
  
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCityById(this.cityId).subscribe(data =>
      {
        this.dataCity.cityName = data.cityName;
        this.dataCity.country = data.country;
        this.dataCity.temp = data.temp;
        this.dataCity.sensation = data.sensation;
        this.dataCity.humidity = data.humidity;
        this.dataCity.windSpeed = data.windSpeed;
      }
    )
  }
}
