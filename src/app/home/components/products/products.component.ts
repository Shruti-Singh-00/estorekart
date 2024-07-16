import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../types/products.type';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { Cart } from '../../types/cart.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;
  session = sessionStorage.getItem('cart');

  constructor(
    public productsStore: ProductsStoreItem,
    private cart: CartStoreItem,
  ) {
    this.session = null;
    sessionStorage.clear();
  }

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
