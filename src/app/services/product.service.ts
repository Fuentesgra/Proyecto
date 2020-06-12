import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      Nombre: product.Nombre,
      Apellido: product.Apellido,
      NControl: product.NControl,
      Clave_Materia: product.Clave_Materia,
      Calificaion: product.Calificacion
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      Nombre: product.Nombre,
      Apellido: product.Apellido,
      NControl: product.NControl,
      Clave_Materia: product.Clave_Materia,
      Calificaion: product.Calificacion
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
