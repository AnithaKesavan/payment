import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './components/payment/payment.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { ReactiveFormsModule } from '@angular/forms';
import { ExpiryMaskDirective } from './components/directives/expiry-mask.directives';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/reducer';
import { PaymentService } from './service/payment.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { NumberonlyDirective } from './components/directives/numberonly';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ExpiryMaskDirective,
    DisplayComponent,
    NumberonlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,

    StoreModule.forRoot({ payment: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    })

  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
