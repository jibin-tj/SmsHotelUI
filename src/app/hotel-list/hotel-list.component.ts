import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Hotel } from '../Hotel';
import { HotelService } from '../hotel-service.service';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];
  cols: any[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.hotelService.getHotels()
      // .map((res: Response) => (
      // res.json() //Convert response to JSON
      // ))
      .subscribe(hotels => this.hotels = hotels.json()._embedded.hotel);
    //this.hotels = JSON.parse(hotels)
    this.cols = [
      { field: 'city', header: 'City' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'end_date', header: 'End Date' },
      { field: 'status', header: 'Status' },
      { field: 'color', header: 'Color' }
    ];
  }

}
