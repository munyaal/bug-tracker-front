import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*ANGUlAR MATERIAL MODULES*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from "@angular/material/table";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class SharedModule { }
