import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-registry-starter',
  templateUrl: './registry-starter.component.html',
  styleUrls: ['./registry-starter.component.scss']
})


export class RegistryStarterComponent implements OnInit {

  @ViewChild('publicSearchBox') searchBoxField: ElementRef;
  start: boolean = false
  imputNomeCompleto: boolean = false;
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
    this.searchBoxField.nativeElement.focus();
  }
}
