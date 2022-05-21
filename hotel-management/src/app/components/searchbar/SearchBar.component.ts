import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'searchbar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() inputChanged = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  onChangeInput(e: Event) {
    this.inputChanged.emit((e.target as HTMLInputElement).value)
  }
}
