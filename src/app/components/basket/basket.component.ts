import { Component } from '@angular/core';
import { BasketService } from "../../services/basket.service"

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(public basketService: BasketService) { }
}
