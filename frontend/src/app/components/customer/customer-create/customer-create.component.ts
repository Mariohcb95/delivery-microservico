import { MatCardModule } from '@angular/material/card';
import { Customer } from './../customer.model';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-create',
  standalone: true,
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
  imports: [MatCardModule, MatFormField, FormsModule, MatInputModule, MatInputModule, MatButtonModule],
  providers: [CustomerService]
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer = {
    nome: '',
    email: ''
  }

  constructor(private customerService: CustomerService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createCustomer(): void {
    
    this.customerService.create(this.customer).subscribe(() => {
      this.customerService.showMessage('Cliente criado!')
      this.router.navigate(['/customers'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/customers'])
  }
}
