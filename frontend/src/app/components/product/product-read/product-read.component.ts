import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-product-read',
  standalone: true,
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
  imports: [MatTableModule, RouterLink, CurrencyPipe, MatPaginatorModule],
  providers: [ProductService]
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'nome', 'preco', 'descricao', 'ativo', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
