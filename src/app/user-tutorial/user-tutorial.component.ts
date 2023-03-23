import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.scss']
})
export class UserTutorialComponent implements OnInit {

  @ViewChild('inputFirstName') searchBoxField: ElementRef;
  start: boolean = false
  formFirstName: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
  }

  showImputFirstName() {
    this.formFirstName = true;
    this.searchBoxField.nativeElement.focus();
  }

  nextComponent() {

  }
}
