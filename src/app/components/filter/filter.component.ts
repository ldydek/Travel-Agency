import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service"
import {LabelType, Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // options: Options = {
    // floor: 0,
    // ceil: 50,
    // step: 0.01,
    // translate: (label: LabelType): string => {
      // switch (label) {
        // case LabelType.Low:
          // return 'Min price: 100';
        // case LabelType.High:
          // return 'Max price: 200';
        // default:
          // return "COCO"
      // }
    // }
  // }
 
  ngOnInit(): void {
    
  }

  constructor(public filterService: FilterService) {
  }
}
