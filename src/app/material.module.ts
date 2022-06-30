import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from "@angular/material/chips";

const modules = [
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatChipsModule
];

@NgModule({
  imports: modules,
  exports: [
    modules,
  ],
})

export class MaterialModule {
}

