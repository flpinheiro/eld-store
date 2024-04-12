import { Component, Input , output, EventEmitter, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Product } from '../../../types/products';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatMenuModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() productList!: Product[];
  @Output() productEvent = new EventEmitter<Product>();

  displayedColumns: string[] = ['name', 'description', 'action'];

  onDelete(product: Product){
    console.log("on delete", product)
  }
  onEdit(product: Product){
    this.productEvent.emit(product);
  }
}
