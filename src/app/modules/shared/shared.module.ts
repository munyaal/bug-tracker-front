import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from '../dashboard/card/card.component';

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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    // CommonModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatExpansionModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatButtonModule,
    // MatDialogModule,
    // HttpClientModule,
    MatCardModule
    
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
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    CardComponent,
    MatGridListModule
  ]
})
export class SharedModule { }
