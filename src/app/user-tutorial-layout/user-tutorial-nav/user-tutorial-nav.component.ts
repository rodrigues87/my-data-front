import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tutorial-nav',
  templateUrl: './user-tutorial-nav.component.html',
  styleUrls: ['./user-tutorial-nav.component.scss']
})
export class UserTutorialNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUserProfileComponent() {
    this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserProfileComponent']);
    });
  }
}
