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
    title: 'User',
    icon: 'layout-outline',
    children: [
      {
        title: 'Thêm User',
        link: '/pages/user/adduser',
      },
      {
        title: 'Hiển thị danh sách',
        link: '/pages/user/listuser',
      },
    ],
  },
  {
    title: '',
    icon: 'layout-outline',
    children: [
      {
        title: 'Thêm User',
        link: '/pages/user/adduser',
      },
      {
        title: 'Hiển thị danh sách',
        link: '/pages/user/listuser',
      },
    ],
  },
];
