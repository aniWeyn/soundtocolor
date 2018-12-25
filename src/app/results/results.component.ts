import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    //public participants: AngularFireList<Participant[]>;
  // constructor(afDb: AngularFireDatabase) {
  //afDb.list<Participant>('/participants').valueChanges().subscribe(console.log);
  //}

}
