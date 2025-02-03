import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatSelectModule, MatButtonModule, MatInputModule],
  providers: [ProductService]
})
export class ProductUpdateComponent implements OnInit {
  
  private readonly route = inject(ActivatedRoute);
  selectedOption = true;
  
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      this.selectedOption =  product.ativo;
    });
  }

  updateProduct(): void {
    this.product.ativo = this.selectedOption;
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
