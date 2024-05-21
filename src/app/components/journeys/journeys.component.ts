import { Component, EventEmitter, OnInit } from '@angular/core';
import { Journey } from 'src/app/classes/journey';
import { BasketService } from 'src/app/services/basket.service';
import { DataBaseService } from 'src/app/services/database.service';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {
  journeys: Journey[] = [];
  value1 = Infinity
  value2 = -Infinity
  counter: number = this.getDataFromBasket()
  removeEvent: EventEmitter<any> = new EventEmitter();
  user!: User
  guest = new User('amogus', 'guest', 'none', -1, [], false);

  constructor(private dataBaseService: DataBaseService, private basketService: BasketService, public authService: AuthService, 
    public userService: UserService) {
    // dataBaseService.initdada()
    dataBaseService.getData().subscribe({
      next : data => this.getData(data),
      error : () =>  console.log("BŁĄD")
    })
  }

  ngOnInit(): void {
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

  find_max() {
    this.journeys.forEach((j) => {
      if (j.tourPrice > this.value2) {
        this.value2 = j.tourPrice
      }
    })
  }

  find_min() {
    this.journeys.forEach((j) => {
      if (j.tourPrice < this.value1) {
        this.value1 = j.tourPrice
      }
    })
  }

  add(value: number) {
    this.counter = this.counter + value
  }

  removeJourney(journey: Journey) {
    this.dataBaseService.removeData(journey.key)
    this.value1 = Infinity
    this.value2 = -Infinity
    this.removeEvent.emit()
  }

  getData(data : any[]) {
    this.journeys = []
    data.forEach(record => {
      let journey = record.payload.val()
      journey.key = record.key
      this.journeys.push(journey)
    })
    this.find_max()
    this.find_min()
  }

  getDataFromBasket() {
    let counter = 0
    this.basketService.basket.forEach(i => {
      counter += i.quantity
    })
    return counter
  }
}
