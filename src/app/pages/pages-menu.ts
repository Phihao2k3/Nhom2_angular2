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
    title: 'Order',
    icon: 'shopping-cart-outline',
    link: '/pages/order',
    children: [
      {
        title: 'Add Order',
        icon: 'clipboard-outline',
        link: '/pages/addoder',
      },
      {
        title: 'Oder List',
        icon: 'list-outline',
        link: '/pages/oderlist',
      },
    ],
  },
];
