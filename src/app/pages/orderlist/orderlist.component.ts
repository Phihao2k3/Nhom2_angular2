import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      productName: {
        title: 'Tên Sản Phẩm',
        type: 'string',
      },
      category: {
        title: 'Thể Loại',
        type: 'string',
      },
      price: {
        title: 'Giá',
        type: 'number',
      },
      quantity: {
        title: 'Số Lượng',
        type: 'number',
      },
      imageUrl: {
        title: 'Hình Ảnh',
        type: 'html',
        valuePrepareFunction: (imageUrl: string) => {
          return `<img src="${imageUrl}" class="img-thumbnail" />`;
        },
        filter: false,
      },
    },
  };

  constructor() {
    this.loadTableData();
  }

  ngOnInit(): void {}

  loadTableData(): void {
    const data = [
      {
        productName: 'Game Disc 1',
        category: 'Action',
        price: 59.99,
        quantity: 100,
        imageUrl: 'https://picsum.photos/100/100?random=1',
      },
      {
        productName: 'Game Disc 2',
        category: 'Adventure',
        price: 49.99,
        quantity: 150,
        imageUrl: 'https://picsum.photos/100/100?random=2',
      },
      {
        productName: 'Game Disc 3',
        category: 'RPG',
        price: 69.99,
        quantity: 200,
        imageUrl: 'https://picsum.photos/100/100?random=3',
      },
      {
        productName: 'Game Disc 4',
        category: 'Strategy',
        price: 39.99,
        quantity: 50,
        imageUrl: 'https://picsum.photos/100/100?random=4',
      },
      {
        productName: 'Game Disc 5',
        category: 'Sports',
        price: 29.99,
        quantity: 75,
        imageUrl: 'https://picsum.photos/100/100?random=5',
      },
    ];

    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
