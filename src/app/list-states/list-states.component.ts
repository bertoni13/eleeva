import { Component, OnInit } from '@angular/core';
import { StateService } from '../api/api';
import { JsonpModule, Jsonp } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.css'],
  providers:[
 	StateService
 	]
})
export class ListStatesComponent implements OnInit {
  public states: any = [];

  constructor(
 		private stateService: StateService,
    private jsonp: Jsonp,
    private router: Router,
    private route: ActivatedRoute) {
 	}

  getStates(){
    this.stateService.getState().subscribe(data => {
      const res = (data as any)
      const ret = JSON.parse(res._body)
      this.states = ret
      console.info(this.states)
    })
  }
  ngOnInit() {
    this.getStates();
  }

}
