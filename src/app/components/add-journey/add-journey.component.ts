import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {
  journeyForm! : FormGroup

  constructor(private dataBaseService:DataBaseService) {}

  ngOnInit(): void {
    this.journeyForm = new FormGroup({
      name : new FormControl("",Validators.required),
      country : new FormControl("",Validators.required),
      startDate : new FormControl("",Validators.required),
      endDate : new FormControl("",Validators.required),
      price : new FormControl("",Validators.required),
      tickets : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required),
      image : new FormControl("",Validators.required)
    })
  }

  addJourney() {
    let name = this.journeyForm.get("name")?.value
    let country = this.journeyForm.get("country")?.value
    let startDate = this.journeyForm.get("startDate")?.value
    let endDate = this.journeyForm.get("endDate")?.value
    let price = this.journeyForm.get("price")?.value
    let tickets = this.journeyForm.get("tickets")?.value
    let description = this.journeyForm.get("description")?.value
    let image = this.journeyForm.get("image")?.value
    let journey = {
      key: '',
      tourName : name,
      destinationCountry: country,
      startDate: startDate,
      endDate: endDate,
      tourPrice: price,
      maxTickets: tickets,
      description: description,
      previewImage: image
    }
    this.dataBaseService.addData(journey)
    this.journeyForm.reset()
  }
}
