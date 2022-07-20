import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  ELEMENT_DATA: Employee[] = [
    {folio: 1, name: 'Hydrogen', date: "1 de febrero del 2020", gender: 'H'},
    {folio: 2, name: 'Helium', date: "2 de febrero del 2021", gender: 'He'},
    {folio: 3, name: 'Lithium', date: "3 de febrero del 2022", gender: 'Li'},
    {folio: 4, name: 'Beryllium', date: "4 de febrero del 2023", gender: 'Be'},
    {folio: 5, name: 'Boron', date: "5 de febrero del 2024", gender: 'B'},
    {folio: 6, name: 'Carbon', date: "6 de febrero del 2025", gender: 'C'},
    {folio: 7, name: 'Nitrogen', date: "7 de febrero del 2026", gender: 'N'},
    {folio: 8, name: 'Oxygen', date: "8 de febrero del 2027", gender: 'O'},
    {folio: 9, name: 'Fluorine', date: "9 de febrero del 2028", gender: 'F'},
    {folio: 10,name: 'Neon', date: "10 de febrero del 2029", gender: 'Ne'},
  ];
  displayedColumns: string[] = ['folio', 'name', 'date', 'gender'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    constructor() {}
  
    ngOnInit(): void {}
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
