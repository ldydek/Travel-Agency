import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Journey } from 'src/app/classes/journey';
import { Opinions } from 'src/app/interfaces/opinions';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent {
  journey: Journey = new Journey()
  form: FormGroup
  comments: Opinions[] = []

  constructor(private route: ActivatedRoute, private dataBaseService: DataBaseService) {
    this.form = new FormGroup({
      nick: new FormControl('',Validators.required),
      tourName: new FormControl('',Validators.required),
      opinion: new FormControl('',Validators.required),
      date: new FormControl('')
    }) 
    route.params.subscribe(params => {
      this.dataBaseService.getSingleJourney(params['id']).subscribe({
        next : data => {
          this.journey = data
          this.journey.key = params['id']
        }
      })
    })
    this.getData()
  }

  submit() {
    let nick = this.form.get("nick")?.value
    let tourName = this.form.get("tourName")?.value
    let opinion = this.form.get("opinion")?.value
    let date = this.form.get("date")?.value
    this.dataBaseService.addComment({
      nick: nick,
      tourName: tourName,
      opinion: opinion,
      date: date
    })
    this.form.reset()
    this.getData()
    console.log(date)
  }

  getData() {
    this.dataBaseService.getOpinions().subscribe({
      next: data => this.comments = data
    })
  }
}
