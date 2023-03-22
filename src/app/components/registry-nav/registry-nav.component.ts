import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-nav',
  templateUrl: './registry-nav.component.html',
  styleUrls: ['./registry-nav.component.scss']
})
export class RegistryNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUserProfileComponent() {
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserProfileComponent']);
    });
  }
}
