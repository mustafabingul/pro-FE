import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSelectChange } from '@angular/material/select'
import { MatTableDataSource } from '@angular/material/table'
import { Sort, MatSort } from '@angular/material/sort'
import { HotelInformation } from 'src/app/model/Hotel'
import { TableComponent } from './table.component'
import {
  SimpleChanges
} from '@angular/core'

const MOCK_DATA: HotelInformation[] = [
  { name: 'hotel1', rate: 1, description: 'desc1', location: 'localtion1' },
  { name: 'hotel1', rate: 1, description: 'desc1', location: 'localtion1' },
  { name: 'hotel2', rate: 2, description: 'desc2', location: 'localtion2' },
  { name: 'hotel3', rate: 3, description: 'desc3', location: 'localtion3' },
  { name: 'hotel4', rate: 3, description: 'desc4', location: 'localtion4' }]

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: []
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    component.filteredData = 'hotel1' // should filter data by 'hotel1'
    component.dataSource = new MatTableDataSource<HotelInformation>(MOCK_DATA)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should filter data by rate', () => {
    const nativeElement = fixture.nativeElement
    const selectElement = nativeElement.querySelector('mat-select')
    fixture.componentInstance.selectChange(
      new MatSelectChange(selectElement, '3'),
    )
    fixture.detectChanges()
    expect(fixture.componentInstance.dataSource.filteredData.length).toBe(2)
  })

  it('should filter data by searching', () => {
    fixture.detectChanges()
    expect(fixture.componentInstance.dataSource.filteredData.length).toBe(2)
  })

  it('should get array from number', () => {
    expect(fixture.componentInstance.counter(4).length).toBe(4)
  })
})
