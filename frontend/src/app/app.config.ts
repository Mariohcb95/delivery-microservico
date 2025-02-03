import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { CustomerCrudComponent } from './views/customer-crud/customer-crud.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { RenderMode } from '@angular/ssr';


const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {   path: '', 
        redirectTo: 'products', 
        pathMatch: 'full' 
    },
    {
        path: "home",
        component: HomeComponent        
    },
    {
      path: "products",
      component: ProductCrudComponent,
    },
    {
      path: "products/create",
      component: ProductCreateComponent
    },
    {
      path: "products/update/:id",
      component: ProductUpdateComponent,
      data: {
        renderMode: 'server'
      }
    },
    {
      path: "products/delete/:id",
      component: ProductDeleteComponent
    },
    
    {
      path: "customers",
      component: CustomerCrudComponent
    },
    {
      path: "customers/create",
      component: CustomerCreateComponent
    },
    {
      path: "customers/update/:id",
      component: CustomerUpdateComponent
    },
    {
      path: "customers/delete/:id",
      component: CustomerDeleteComponent
    },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(appRoutes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(), 
    provideHttpClient(withFetch()), 
    provideAnimationsAsync()]
};
