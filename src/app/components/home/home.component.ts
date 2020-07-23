import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  private demoList: Array<Object>;
  constructor() {
    this.demoList = [
      {
        name: 'Page A',
        url: '/pageA'
      },
      {
        name: 'Page B',
        url: '/pageB'
      }];
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}
}
