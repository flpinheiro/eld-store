import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Product } from '../../../types/products';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  providers: [
    MatDialog
  ]
})
export class ProductFormComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productFormGroup.patchValue({ ...this.data });
  }

  productFormGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true })
  })

  getValue = (): Product => this.productFormGroup.getRawValue();

  onSave(): void {
    console.log('on save');
  }

  onNoClick(): void {
    console.log('on no click');
    this.dialogRef.close();
  }
}
