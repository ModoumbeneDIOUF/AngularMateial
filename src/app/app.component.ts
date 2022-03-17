import { ApiService } from './services/api.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCommmerceApp';

  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'comment', 'date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService,private toast:NgToastService) {}
  ngOnInit(): void {

    this.getAllProducts()
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width:"40%"
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
          this.getAllProducts()
      }
    })
  }

  getAllProducts(){

      this.api.getProducts()
      .subscribe({
        next: (res)=>{

          this.dataSource = new MatTableDataSource(res)
          this.dataSource.paginator = this.paginator
          this.dataSource.sort = this.sort

        },
        error:(err)=>{
          alert("Error while adding product")

        }
      })
  }

  editProduct(row:any){
    this.dialog.open(DialogComponent,{

      width: "30%",
      data: row
    }).afterClosed().subscribe(val => {
      this.toast.info({detail:"Success",summary:"Product deleted successfully", sticky:true,position:"t’"})

      if (val === 'update') {


          this.getAllProducts()
      }
    })
  }

  deteleProduct(id:number){


    this.api.deleteProducts(id)

    .subscribe({
      next: (res)=>{
         //alert("Product deleted successfully")
          this.toast.success({detail:"Success",summary:"Product deleted successfully", sticky:true,position:"t’"})

          this.getAllProducts()
      },
      error:()=>{
        alert("Error while deleted product")

      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
