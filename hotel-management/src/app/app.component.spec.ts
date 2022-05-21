import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HotelService } from './services/hotel.service'
describe('AppComponent', () => {

  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [HotelService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('data should assign to filterData', () => {
    component.onInputChange('test data')
    expect(component.filter).toBe('test data')
  })

});
