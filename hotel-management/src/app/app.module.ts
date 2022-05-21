import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import COMPONENT from './components'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSelectModule } from '@angular/material/select'
import { MatSortModule } from '@angular/material/sort'
@NgModule({
  declarations: [AppComponent, ...COMPONENT],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
