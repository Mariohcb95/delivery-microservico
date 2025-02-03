import { Customer } from "./../customer.model";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-customer-update",
  standalone: true,
  templateUrl: "./customer-update.component.html",
  styleUrls: ["./customer-update.component.css"],
  imports: [MatCardModule, MatFormField, FormsModule, MatInputModule, MatButtonModule],
  providers: [CustomerService]
})
export class CustomerUpdateComponent implements OnInit {
  
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.customerService.readById(id).subscribe((customer) => {
      this.customer = customer;
    });
  }

  updateCustomer(): void {
    this.customerService.update(this.customer).subscribe(() => {
      this.customerService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/customers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/customers"]);
  }
}
