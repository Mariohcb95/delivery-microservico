import { CustomerService } from './../customer.service';
import { Customer } from './../customer.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-customer-read',
  standalone: true,
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css'],
  imports: [RouterLink, MatTableModule],
  providers: [CustomerService]
})
export class CustomerReadComponent implements OnInit {

  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)

  customers: Customer[]
  displayedColumns = ['id', 'nome', 'email', 'action']
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.read().subscribe(customers => {
      this.customers = customers
    })
  }

  onAdd() {
    this.add.emit(true)
  }

  onEdit() {

  }

}
