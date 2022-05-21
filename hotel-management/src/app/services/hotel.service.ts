import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HotelInformation } from '../model/'
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getHotels() {

    const headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', 'https://localhost:7297');
      
    return this.http.get<HotelInformation[]>('https://localhost:7297/api/hotel').pipe(catchError(err => { console.log("Error", err); return of([])}))
  }
}
