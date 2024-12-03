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
    title: 'Category',
    icon: 'grid-outline',
    children: [
      {
        title: 'Add Category',
        icon: 'plus-circle-outline',
        link: '/pages/Category/addCategory',
      },
      {
        title: 'List Category',
        icon: 'list-outline',
        link: '/pages/Category/listCategory',
      },
    ],
  },
];
