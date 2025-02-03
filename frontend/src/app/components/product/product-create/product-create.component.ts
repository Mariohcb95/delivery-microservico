import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-create',
  standalone: true,
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'], 
  imports: [MatCardModule, MatFormField, MatSelectModule, FormsModule, MatInputModule, MatButtonModule],
  providers: [ProductService]
})
export class ProductCreateComponent implements OnInit {
  selectedOption = null;

  product: Product = {
    nome: '',
    descricao: '',
    preco: 0,
    ativo: true
  }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
