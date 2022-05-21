import { Component, OnInit } from '@angular/core'
import {HotelInformation} from './model/Hotel'
import { HotelService } from './services/hotel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-project-angular'
  filter = ''
  tableData:HotelInformation[] = []
  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data) => {
      this.tableData = data;
    })
  }

  onInputChange(data: string) {
    this.filter = data
  }
}
