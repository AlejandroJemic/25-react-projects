const menuData = [
  {
    id: 1,
    label: 'Home',
    url: '/home',
    children: [],
  },
  {
    id: 2,
    label: 'Products',
    url: '/products',
    children: [
      {
        id: 3,
        label: 'Electronics',
        url: '/products/electronics',
        children: [
          {
            id: 4,
            label: 'Mobile Phones',
            url: '/products/electronics/mobile-phones',
            children: [],
          },
          {
            id: 5,
            label: 'Laptops',
            url: '/products/electronics/laptops',
            children: [],
          },
        ],
      },
      {
        id: 6,
        label: 'Furniture',
        url: '/products/furniture',
        children: [
          {
            id: 7,
            label: 'Living Room',
            url: '/products/furniture/living-room',
            children: [],
          },
          {
            id: 8,
            label: 'Bedroom',
            url: '/products/furniture/bedroom',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    label: 'About Us',
    url: '/about',
    children: [],
  },
  {
    id: 10,
    label: 'Contact',
    url: '/contact',
    children: [
      {
        id: 11,
        label: 'Customer Support',
        url: '/contact/customer-support',
        children: [],
      },
      {
        id: 12,
        label: 'Sales Inquiry',
        url: '/contact/sales-inquiry',
        children: [],
      },
    ],
  },
];

export default menuData;
