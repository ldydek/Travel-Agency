import { Component } from '@angular/core';
import { DataBaseService } from 'src/app/services/database.service';
import { History } from '../../interfaces/history'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  boughtJourneys : History[] = []

  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit(): void {
    this.dataBaseService.getHistory().subscribe({
      next : data => {
        this.boughtJourneys = data
      },
      error : error => console.log(error)
    })
  }
}
