import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  data;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8090/competitions').subscribe(Response => {
      console.log(Response.json());

      this.data = Response.json();
    });
  }

}
