import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OderlistComponent implements OnInit {
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = this.generateSampleProducts();
  }

  generateSampleProducts(): any[] {
    return [
      {
        productName: 'Game Disc 1',
        category: 'Action',
        price: 59.99,
        quantity: 100,
        imageUrl: 'https://picsum.photos/100/100?random=1'
      },
      {
        productName: 'Game Disc 2',
        category: 'Adventure',
        price: 49.99,
        quantity: 150,
        imageUrl: 'https://picsum.photos/100/100?random=2'
      },
      {
        productName: 'Game Disc 3',
        category: 'RPG',
        price: 69.99,
        quantity: 200,
        imageUrl: 'https://picsum.photos/100/100?random=3'
      },
      {
        productName: 'Game Disc 4',
        category: 'Strategy',
        price: 39.99,
        quantity: 50,
        imageUrl: 'https://picsum.photos/100/100?random=4'
      },
      {
        productName: 'Game Disc 5',
        category: 'Sports',
        price: 29.99,
        quantity: 75,
        imageUrl: 'https://picsum.photos/100/100?random=5'
      }
    ];
  }

  editProduct(product: any) {
    // Logic to edit product
    console.log('Edit Product:', product);
  }

  deleteProduct(index: number) {
    // Logic to delete product
    this.products.splice(index, 1);
  }
}
