import {Injectable} from '@angular/core';
import { Journey } from "../classes/journey";
import { Basket } from "../interfaces/basket";

@Injectable({
    providedIn: 'root'
})

export class BasketService {
    basket: Basket[] = [];
    cost: number = 0

    addToBasket(journey: Journey) {
        let flag = false
        this.basket.forEach(counter => {
            if (counter.name == journey.tourName) {
                counter.quantity++;
                flag = true
            }
        })
        if (flag == false) {
            this.basket.push({name: journey.tourName, quantity: 1})
        }
        this.cost += journey.tourPrice
    }

    removeFromBasket(journey: Journey) {
        this.basket.forEach((counter, index) => {
            if (counter.name == journey.tourName) {
                if (counter.quantity > 1) {
                    counter.quantity--;
                }
                else {
                    this.basket.splice(index, 1);
                }
            }
        })
        this.cost -= journey.tourPrice;
    }

    getCost() {
        return this.cost;
    }
}