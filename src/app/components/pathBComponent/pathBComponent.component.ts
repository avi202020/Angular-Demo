import {Component, OnInit, OnChanges, OnDestroy, Input} from '@angular/core';
import { ComputeService } from "../../servcies/compute.service";
import {isNumber} from "util";

@Component({
  selector: 'path-b',
  templateUrl: './pathBComponent.component.html',
  styleUrls: ['./pathBComponent.component.scss'],
})

export class PathBComponent implements OnInit, OnChanges, OnDestroy {
  public inputNumber: number;
  constructor(public compute: ComputeService) {
  }
  ngOnInit() {}

  ngOnChanges() {}

  ngOnDestroy() {}

  public isNumber(input: any): boolean {
    const regx = /[\d]/;
    return regx.test(input);
  }
}
