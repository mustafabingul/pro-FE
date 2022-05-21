import { TestBed, async, inject } from '@angular/core/testing'
import { HotelService } from './hotel.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

describe('Service: Hotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HotelService],
    })
  })

  it('should service render correctly', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy()
  }))

  it('should have getHotels function', () => {
    const service: HotelService = TestBed.get(HotelService)
    expect(service.getHotels).toBeTruthy()
  })
})
