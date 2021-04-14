import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListComponent } from './component/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})

export class MoviesListModule { }
