import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
    { path: 'user', component: UserComponent },
    { path: 'about', component: AboutComponent },
];
