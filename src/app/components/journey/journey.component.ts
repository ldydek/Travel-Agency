import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Journey } from 'src/app/classes/journey';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  @Input() journey!: Journey;
  @Input() minValue!: Number
  @Input() maxValue!: Number
  @Input() removeEvent!: EventEmitter<any>
  @Output() counter: EventEmitter<number> = new EventEmitter()
  @Output() delete: EventEmitter<Journey> = new EventEmitter()
  ticket!: Number
  smallAmountOfTickets!: boolean
  noTickets!: boolean
  fullAmountOfTickets!: boolean
  ticketsNumber!: Number
  edgePrice: Number = 0
  rating: number = 0;
  starCount: number = 5;
  inJourneys: boolean = true
  user!: User
  guest = new User('amogus', 'guest', 'none', -1, [], false);

  constructor(public basketService: BasketService, public authService: AuthService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.journey.maxTickets -= this.getNumber()
    this.inJourneys = this.minValue != undefined
    if (this.inJourneys) {
      this.ticketsNumber = this.journey.maxTickets + this.getNumber()
      this.ticket = this.journey.maxTickets
      this.boolFunction()
      this.checkPrice()
      this.removeEvent.subscribe(() => this.checkPrice)
    }

    this.authService.userData.subscribe(user => {
      if (user != null) {
        this.userService.users.subscribe(e => {
          this.user = e.filter((usr: { key: string; }) => usr.key == user.uid)[0];
        })
      }
      else {
        this.user = this.guest;
      }
    });
  }


  add() {
    this.journey.maxTickets--;
    this.boolFunction()
    this.counter.emit(1)
  }

  remove() {
    this.journey.maxTickets++;
    this.boolFunction()
    this.counter.emit(-1)
  }

  boolFunction() {
    this.smallAmountOfTickets = this.journey.maxTickets < 4
    this.noTickets = this.journey.maxTickets == 0
    this.fullAmountOfTickets = this.ticketsNumber == this.journey.maxTickets
  }

  checkPrice() {
    if (this.minValue == this.journey.tourPrice) {
      this.edgePrice = -1;
    }
    else if (this.maxValue == this.journey.tourPrice) {
      this.edgePrice = 1;
    }
  }

  removeCard() {
    this.delete.emit(this.journey)
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  getNumber() {
    let quantity1 = this.basketService.basket.find(i => i.name == this.journey.tourName)
    if (quantity1) {
      return quantity1.quantity
    }
    return 0
  }
}
