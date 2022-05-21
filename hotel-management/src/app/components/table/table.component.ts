import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewChild,
  AfterViewInit,
  SimpleChanges
} from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { MatTableDataSource } from '@angular/material/table'
import { Sort, MatSort } from '@angular/material/sort'
import { HotelInformation } from 'src/app/model/Hotel'



@Component({
  selector: 'hotel-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  selectedRate: string = '1'
  displayedColumns: string[] = ['name', 'description', 'location', 'rate']
  dataSource = new MatTableDataSource<HotelInformation>([])

  @ViewChild(MatSort, { static: false }) sort: MatSort;


  @Input() filteredData: string = ''
  @Input() tableData: HotelInformation[];

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {

    this.dataSource.filterPredicate = function customFilter(data, filter) {
      // filter with
      return (
        data.name.toLocaleLowerCase().startsWith(filter) ||
        data.rate.toString().startsWith(filter)
      )
    }

    this.dataSource.filter = this.filteredData.trim().toLowerCase()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.filter = this.filteredData.trim().toLocaleLowerCase()

    if (Object.keys(changes).includes('tableData')) {
      this.dataSource = new MatTableDataSource<HotelInformation>(this.tableData)
    }
  }

  selectChange(event: MatSelectChange) {
    this.selectedRate = event.value

    this.dataSource.filter = this.selectedRate.trim().toLocaleLowerCase()
    this.dataSource.sortData
  }

  counter(i: number) {
    return new Array(i);
  }
}
