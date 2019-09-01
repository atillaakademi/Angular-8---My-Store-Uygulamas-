import { Component } from '@angular/core';
import { products } from '../products';



@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styles: ['./product-list.component.css']
})
export class ProductListComponent {

    ProductList = products;

    shareProduct(): void {
        alert('Product Shared');
    }

    notifyMe(): void {
        alert("notify product");
    }

}