import { Component, OnInit, ViewChild } from '@angular/core';
import { TableModule, Table } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { Hotel } from '../Hotel';
import { HotelService } from '../hotel-service.service';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @ViewChild('dt') private _table: Table;
  title = "Sms Digital Coding Challenge"
  hotels: Hotel[];
  cols: any[];
  startDate: Date;
  endDate: Date;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.hotelService.getHotels()
      .subscribe(hotels => this.hotels = hotels.json()._embedded.hotel);
    this.cols = [
      { field: 'city', header: 'City' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'end_date', header: 'End Date' },
      { field: 'status', header: 'Status' },
      { field: 'color', header: 'Color' }
    ];
    var _self = this;
    // this will be called from your templates onSelect event
    this._table.filterConstraints['dateRangeFilter'] = (value1, filter): boolean => {
      // get the from/start value
      let value = new Date(value1)
      var s = _self.startDate[0].getTime();
      var e;
      // the to/end value might not be set
      if (_self.startDate[1]) {
        e = _self.startDate[1].getTime() + 86400000;
      } else {
        e = s + 86400000;
      }
      // compare it to the actual values
      return value.getTime() >= s && value.getTime() <= e;
    }

    this._table.filterConstraints['endDateFilter'] = (value1, filter): boolean => {
      // get the from/start value
      let value = new Date(value1)
      var s = _self.endDate[0].getTime();
      var e;
      if (_self.endDate[1]) {
        e = _self.endDate[1].getTime() + 86400000;
      } else {
        e = s + 86400000;
      }
      // compare it to the actual values
      return value.getTime() >= s && value.getTime() <= e;
    }

  }

  customSort(event) {

    event.data.sort((data1, data2) => {

      let value1 = data1[event.field]
      let value2 = data2[event.field]
      let result = null;

      if (event.field === "start_date" || event.field === "end_date") {
        result = (Date.parse(value1) < Date.parse(value2)) ? -1 : (Date.parse(value1) > Date.parse(value2)) ? 1 : 0;
      } else {
        if (value1 == null && value2 != null)
          result = -1;
        else if (value1 != null && value2 == null)
          result = 1;
        else if (value1 == null && value2 == null)
          result = 0;
        else {

          result = value1.localeCompare(value2);

        }
      }
      return (event.order * result);
    });
  }

}
