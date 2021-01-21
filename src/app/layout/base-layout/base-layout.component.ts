import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  pageTitle = 'Carregando...';

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(
      (res) => {
        if (res instanceof ActivationEnd && res.snapshot.data.pageTitle) {
          this.pageTitle = res.snapshot.data.pageTitle;
        }
      }
    );
  }

  ngOnInit(): void {
  }
}
