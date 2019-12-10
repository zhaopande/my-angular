import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoductAlertsComponent } from './roduct-alerts/roduct-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './Page-not-found/Page-not-found.component';

const appRoutes: Routes = [
   { path: 'list', component: ProductListComponent },
   { path: '**', component: PageNotFoundComponent },
];
@NgModule({
   declarations: [
      AppComponent,
      RoductAlertsComponent,
      ProductListComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: true } // <-- debugging purposes only
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent, ProductListComponent
   ]
})
export class AppModule { }
