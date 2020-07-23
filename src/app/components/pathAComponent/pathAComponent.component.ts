import {Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'path-a',
  templateUrl: './pathAComponent.component.html',
  styleUrls: ['./pathAComponent.component.scss'],
})

export class PathAComponent implements OnInit, OnChanges, OnDestroy {
  public demo: any;
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}
}
