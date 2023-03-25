import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss']
})
export class BirthDateComponent implements OnInit {
  start: boolean = false
  formBirthDate: boolean = false;

  day: string = '';
  month: string = '';
  year: string = '';

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
    if(this.day !== "null"){
      this.day = this.storageService.getItem("day")
    }
    if(this.month !== "null"){
      this.month = this.storageService.getItem("month")
    }
    if(this.year !== "null"){
      this.year = this.storageService.getItem("year")
    }

  }

  showImputFirstName() {
    this.formBirthDate = true;
  }

  setDay(value: any) {
    this.day = value;
  }

  setMonth(value: any) {
    this.month = value;
  }

  setYear(value: any) {
    this.year = value;
  }

  saveFullDate() {
    if(this.day !== '' || this.month !== '' || this.year !== ''){


      this.storageService.setItem("day", this.day)
      this.storageService.setItem("month", this.month)
      this.storageService.setItem("year", this.year)
    }

    this.router.navigate(["/user-tutorial/address"])

  }
}
