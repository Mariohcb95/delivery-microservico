import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CustomerReadComponent } from '../../components/customer/customer-read/customer-read.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-customer-crud',
  templateUrl: './customer-crud.component.html',
  styleUrls: ['./customer-crud.component.css'],
  imports: [CustomerReadComponent, MatButtonModule]
})
export class CustomerCrudComponent implements OnInit {

  constructor(
    private router: Router, 
    private headerService: HeaderService,
    public dialog: MatDialog,    
    private route: ActivatedRoute
  ) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'storefront',
      routeUrl: '/customers'
    }
    
  }

  ngOnInit(): void {
  }

  navigateToCustomerCreate(): void {
    this.router.navigate(['/customers/create'])
  }

}
