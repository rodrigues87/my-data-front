import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.scss']
})
export class UserTutorialComponent implements OnInit {

  @ViewChild('publicSearchBox') searchBoxField: ElementRef;
  start: boolean = false
  imputNomeCompleto: boolean = false;
  imputButtonProsseguir: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
  }

  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

  showImput() {
    this.imputNomeCompleto = true;
    this.imputButtonProsseguir = true;
    this.searchBoxField.nativeElement.focus();
  }

}
