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
    icon: 'home-outline',
    children: [
      
        {
          title: 'Add Category',
          link: '/pages/Category/addCategory',
        },
        {
          title: 'List Category',
          link: '/pages/Category/listCategory',
        },
      
    ]
  },
];
