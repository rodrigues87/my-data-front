import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss']
})
export class BirthDateComponent implements OnInit {
  @ViewChild('inputFirstName') searchBoxField: ElementRef;
  start: boolean = false
  formFirstName: boolean = false;

  day: string;
  month: string;
  year: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
    this.day = localStorage.getItem("day")
    this.month = localStorage.getItem("month")
    this.year = localStorage.getItem("year")

  }

  showImputFirstName() {
    this.formFirstName = true;
    this.searchBoxField.nativeElement.focus();
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
    localStorage.setItem("day", this.day)
    localStorage.setItem("month", this.month)
    localStorage.setItem("year", this.year)
  }
}
