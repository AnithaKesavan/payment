import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  payments$: Observable<any>;
  array;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.payments$ = this.store.select('payment');
    this.payments$.subscribe(data => this.array = data);
    console.log(this.array);
  }

}
