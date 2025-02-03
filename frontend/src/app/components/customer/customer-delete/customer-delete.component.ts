import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer.model";
import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-customer-delete",
  standalone: true,
  templateUrl: "./customer-delete.component.html",
  styleUrls: ["./customer-delete.component.css"],
  imports: [MatCardModule, MatFormField, MatButtonModule, MatInputModule, FormsModule],
  providers: [CustomerService]
})
export class CustomerDeleteComponent implements OnInit {
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.customerService.readById(id).subscribe((customer) => {
      this.customer = customer;
    });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.customer.id ?? 0).subscribe(() => {
      this.customerService.showMessage("Cliente excluido com sucesso!");
      this.router.navigate(["/customers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/customers"]);
  }
}
