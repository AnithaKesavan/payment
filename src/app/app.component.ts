import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angularproject';

  payments$: Observable<any>;
  public arraypayment;

  constructor(private store: Store<any>) {


  }

  public ngOnInit() {
    this.payments$ = this.store.select('payment');
    this.payments$.subscribe(data => this.arraypayment = data);
    console.log(this.arraypayment);
    console.log('dsgf');
  }

} 
