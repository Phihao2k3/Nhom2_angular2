import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Sản phẩm',
    icon: '',
    children: [
      {
        title: 'Thêm sản phẩm',
        link: '/pages/product/addproduct',
      },
      {
        title: 'Danh sách sản phẩm',
        link: '/pages/product/listproduct',
      },
    ],
  },
];
