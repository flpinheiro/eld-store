import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PRODUCT_INITIALIZER, Product } from '../../types/products';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule, ProductFormComponent, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [
    ProductService,
    MatDialog
  ]
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];

  constructor(private service: ProductService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.service.getProducts().then(data => this.productList = data).catch(err => console.log(err));
  }

  openDialog(productEvent: Product = PRODUCT_INITIALIZER): void {
    const dialogRef = this.dialog.open(ProductFormComponent, { data:  productEvent });
    dialogRef.beforeClosed().subscribe(result => {
      console.log("on closing", result);
      this.productList.push(productEvent);
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
