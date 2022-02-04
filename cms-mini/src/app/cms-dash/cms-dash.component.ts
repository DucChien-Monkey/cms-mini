import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ItemData } from './cms.model';

@Component({
  selector: 'app-cms-dash',
  templateUrl: './cms-dash.component.html',
  styleUrls: ['./cms-dash.component.css'],
})
export class CmsDashComponent implements OnInit {
  formValue!: FormGroup;

  itemModelObj: ItemData = new ItemData();
  allItemData: any;
  showAdd!: boolean;
  showBtn!: boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      service: [''],
    });
    this.getAllItems();
  }
  clickAddItem() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  addItem() {
    this.itemModelObj.name = this.formValue.value.name;
    this.itemModelObj.email = this.formValue.value.email;
    this.itemModelObj.phone = this.formValue.value.phone;
    this.itemModelObj.address = this.formValue.value.address;
    this.itemModelObj.service = this.formValue.value.service;

    this.api.postItem(this.itemModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('success');
        let ref = document.getElementById('clear');
        ref?.click();

        this.formValue.reset();
        this.getAllItems();
      },
      (err) => {
        alert('error');
      }
    );
  }

  getAllItems() {
    this.api.getItem().subscribe((res) => {
      this.allItemData = res;
    });
  }

  delItem(data: any) {
    this.api.deleteItem(data.id).subscribe((res) => {
      alert('delete success');
      this.getAllItems();
    });
  }

  onEditItem(data: any) {
    this.showAdd = false;
    this.showBtn = true;
    this.itemModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['service'].setValue(data.service);
  }

  updateItem() {
    this.itemModelObj.name = this.formValue.value.name;
    this.itemModelObj.email = this.formValue.value.email;
    this.itemModelObj.phone = this.formValue.value.phone;
    this.itemModelObj.address = this.formValue.value.address;
    this.itemModelObj.service = this.formValue.value.service;

    this.api
      .updateItem(this.itemModelObj, this.itemModelObj.id)
      .subscribe((res) => {
        alert('success');
        let ref = document.getElementById('clear');
        ref?.click();

        this.formValue.reset();
        this.getAllItems();
      });
  }
}
