import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-forms-nav',
  templateUrl: './user-forms-nav.component.html',
  styleUrls: ['./user-forms-nav.component.scss']
})
export class UserFormsNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUserProfileComponent() {
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserProfileComponent']);
    });
  }
}
