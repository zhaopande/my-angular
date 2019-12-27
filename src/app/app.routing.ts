import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoductAlertsComponent } from './pages/roduct-alerts/roduct-alerts.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
    { path: 'list', component: ProductListComponent },
    { path: 'alert', component: RoductAlertsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {
}