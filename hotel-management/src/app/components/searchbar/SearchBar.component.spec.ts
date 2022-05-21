/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { SearchBarComponent } from './SearchBar.component'

describe('SearchBarComponent', () => {
  let component: SearchBarComponent
  let fixture: ComponentFixture<SearchBarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit entered value', () => {
    spyOn(component.inputChanged, 'emit')
    const nativeElement = fixture.nativeElement
    const inputElement = nativeElement.querySelector('input')
    inputElement.dispatchEvent(new Event('keyup'))
    fixture.detectChanges()
    expect(component.inputChanged.emit).toHaveBeenCalled()
  })
})
