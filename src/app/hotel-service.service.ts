import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: Http) {}

  getHotels() {
    return this.http.get('http://localhost:8080/hotel');
                
}
}
