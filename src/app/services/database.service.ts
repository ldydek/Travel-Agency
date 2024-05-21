import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Journey } from '../classes/journey';
import  JourneyData  from '../data/journeys.json'
import { Opinions } from '../interfaces/opinions';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private db: AngularFireDatabase) {}

  addData(journey: Journey) {
    let daneRef = this.db.list('wycieczki')
    daneRef.push(journey)
  }

  getData() : Observable<any>  {
    return this.db.list('wycieczki').snapshotChanges()
  }

  removeData(id : string) {
    let daneRef = this.db.list('wycieczki')
    daneRef.remove(id)
  }

  getHistory() : Observable<any> {
    return this.db.list('historia').valueChanges()
  }

  initdada() {
    JourneyData.forEach(record => {
      this.addData(record)
    })
  }

  getSingleJourney(key : string) : Observable<any> { 
    return this.db.object('wycieczki/' + key).valueChanges()
  }

  addComment(commment : Opinions) {
    let daneRef = this.db.list('komentarze')
    daneRef.push(commment)
  }

  getOpinions() : Observable<any> {
    return this.db.list('komentarze').valueChanges()
  }
}
