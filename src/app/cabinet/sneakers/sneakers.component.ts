import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddSneakersComponent } from '../add-sneakers/add-sneakers.component';
import { DeleteSneakersComponent } from '../delete-sneakers/delete-sneakers.component';
import { ApiService } from '../services/api.service';


export interface Sneaker {
  id: number;
  brand: string;
  model: string;
  type: string;
  price: string;
}

interface BrandId {
  id: number;
  brand: string;
}
interface TypeId {
  id: number;
  type: string;
}
interface ModelId {
  id: number;
  model: string;
}
@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {
  sneakersArray: Sneaker[] = [];
  BrandArray: BrandId[] = [];
  ModelArray: ModelId[] = [];
  TypeArray: TypeId[] = [];
  color = '#E91717';

  limit: any = 5;
  pageIndex: any = 0;
  skip: any = 0;

  filterForm: FormGroup = this.fb.group({
    employee: null,
    brandId: 0,
    typeId:0,
    modelId:0
  });

  displayedColumns: string[] = ['brand', 'model', 'type', 'price', 'actions'];
  dataSource = new MatTableDataSource<Sneaker>(this.sneakersArray);
  showSpinner = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Sneaker>(this.sneakersArray);
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: any) {
    this.showSpinner = true;
    this.limit = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.get_sneakers(
      this.filterForm.value,
      event.pageSize,
      event.pageSize * event.pageIndex,
      false
    );
  }

  openDialog(label: string, id: any) {
    console.log(id);
    this.dialog.open(AddSneakersComponent, {
      data: { label: `${label}`, id: id },
    });
  }
  constructor(
    public dialog: MatDialog,
    public apiService: ApiService,
    private fb: FormBuilder
  ) { 

      this.get_Brand();  //?
      this.get_Model();  //?
      this.get_Type();  //?
      this.get_sneakers({ "brand": this.filterForm.controls['brand'].value, "model": this.filterForm.controls['model'].value, "type": this.filterForm.controls['type'].value}, 5, 0, false);
  }

  filter_sneakers() {
    this.showSpinner = true;
    this.get_sneakers({ "brand": this.filterForm.controls['brand'].value, "model": this.filterForm.controls['model'].value, "type": this.filterForm.controls['type'].value }, this.limit, this.skip, false);
    console.log({  "brand": this.filterForm.controls['brand'].value, "model": this.filterForm.controls['model'].value, "type": this.filterForm.controls['type'].value  })

    // this.get_vacations({ "employee": this.filterForm.controls.employee.value, "startDate": this.range.controls.startDate.value, "endDate": this.range.controls.endDate.value, "vacationReasonId": this.filterForm.controls.vacationReasonId.value }, this.limit, this.skip, false);
  }

  openDeleteDialog(label:string, id:number){
    this.dialog.open(DeleteSneakersComponent,{
      data:{label: `${label}`, id: id}
    });
  }

  delete_sneaker(id:number){
    this.openDeleteDialog("sneaker", id);
  }

  ngOnInit(): void {}
  get_sneakers(
    filterModel: any,
    limit: number,
    skip: number,
    isExport: boolean
  ) {
    this.sneakersArray = [];
    this.apiService
      .getSneakers(
        { "brand": filterModel.brand, "model": filterModel.model, "type": filterModel.type },
        limit, skip, isExport
      )
      .subscribe((data) => {
        console.log(data.response.data)
        for (let element of data.response.data) {
          this.sneakersArray.push({
            id: element.id,
            brand: element.brand,
            model: element.model,
            type: element.type,
            price: element.price
          });
        }
        this.paginator.length = data.response.total;
        this.dataSource = new MatTableDataSource<Sneaker>(this.sneakersArray);
        this.showSpinner = false;
      });
  }
  get_Brand() {
    this.apiService.getBrandss().subscribe((data) => {
      this.BrandArray = data.result;
    });
  }
  get_Model() {
    this.apiService.getModelss().subscribe((data) => {
      this.ModelArray = data.result;
    });
  }
  get_Type() {
    this.apiService.getTypess().subscribe((data) => {
      this.TypeArray = data.result;
    });
  }

}
