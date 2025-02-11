import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'cart',
        component: CartListComponent
    }
];
