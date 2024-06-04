import { LIMIT } from "../consts";

export const productsData = [
  {
    id: "1",
    title: "Beauty Product 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corpori aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B01.jpg",
    price: 100,
    oldPrice: 251,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "2",
    title: " Beauty Product 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B02.jpg",
    price: 200,
    oldPrice: 351,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "3",
    title: " Beauty Product 3",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B03.jpg",
    price: 300,
    oldPrice: 551,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "4",
    title: " Beauty Product 4",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B04.jpg",
    price: 400,
    oldPrice: 451,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "5",
    title: " Beauty Product 5",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B05.jpg",
    price: 500,
    oldPrice: 581,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "6",
    title: " watch Product 6",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w01.jpg",
    price: 600,
    oldPrice: 699,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "7",
    title: "watch Product 7",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w02.jpg",
    price: 700,
    oldPrice: 799,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "8",
    title: "watch Product 8",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w03.jpg",
    price: 800,
    oldPrice: 856,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "9",
    title: "watch Product 9",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w04.jpg",
    price: 900,
    oldPrice: 999,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "10",
    title: "watch Product 10",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w05.jpg",
    price: 1000,
    oldPrice: 1049,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "11",
    title: "shoes Product 11",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s01.jpg",
    price: 1100,
    oldPrice: 1149,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "12",
    title: "shoes Product 12",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s02.jpg",
    price: 1200,
    oldPrice: 1349,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "13",
    title: "shoes Product 13",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s03.jpg",
    price: 1300,
    oldPrice: 1399,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "14",
    title: "shoes Product 14",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s04.jpg",
    price: 1400,
    oldPrice: 1549,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "15",
    title: "shoes  Product 15",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s05.jpg",
    price: 1500,
    oldPrice: 1749,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "16",
    oldPrice: 1049,
    title: "shoes Product 16",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s01.jpg",
    price: 1100,
    oldPrice: 1249,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "17",
    title: "shoes Product 17",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s02.jpg",
    price: 1200,
    oldPrice: 1399,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "18",
    title: "shoes Product 18",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s03.jpg",
    price: 1300,
    oldPrice: 1549,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "19",
    title: "shoes Product 19",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s04.jpg",
    price: 1400,
    oldPrice: 1849,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "20",
    title: "shoes  Product 20",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/s05.jpg",
    price: 1500,
    oldPrice: 1849,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "21",
    title: "Beauty Product 21",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corpori aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B01.jpg",
    price: 100,
    oldPrice: 149,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "22",
    title: " Beauty Product 22",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B02.jpg",
    price: 200,
    oldPrice: 399,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "23",
    title: " Beauty Product 23",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B03.jpg",
    price: 300,
    oldPrice: 349,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "24",
    title: " Beauty Product 24",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde alias dignissimos dolorem, quia omnis cumque nobis ratione corporis reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B04.jpg",
    price: 400,
    oldPrice: 449,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "25",
    title: " Beauty Product 25",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/B05.jpg",
    price: 500,
    oldPrice: 549,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "26",
    title: " watch Product 26",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w01.jpg",
    price: 600,
    oldPrice: 749,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "27",
    title: "watch Product 27",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w02.jpg",
    price: 700,
    oldPrice: 849,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "28",
    title: "watch Product 28",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w03.jpg",
    price: 80,
    oldPrice: 149,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "29",
    title: "watch Product 29",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w04.jpg",
    price: 900,
    oldPrice: 999,
    rating: Math.floor(Math.random() * 6),
  },
  {
    id: "30",
    title: "watch Product 30",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae unde  alias dignissimos dolorem, quia omnis cumque nobis ratione corporis  reprehenderit aut velit quas quod veniam repellendus incidunt nihil inventore!",
    img: "/images/w05.jpg",
    price: 1000,
    oldPrice: 1149,
    rating: Math.floor(Math.random() * 6),
  },
];

export function getProducts(pageNumber = 1, limit = LIMIT, query, price) {
  const start = (pageNumber - 1) * limit;
  const end = pageNumber * limit;

  let temp = null;

  if (query) {
    temp = productsData.filter((value) => {
      return value.title.includes(query);
    });
  }

  if (price) {
    temp = (temp || productsData).filter((product) => {
      return product.price <= price;
    });
  }

  console.log(start, end, pageNumber, limit);

  return (temp || productsData).slice(start, end);
}

// export function getProductsData(pageNumber = 1, limit = LIMIT) {
//   const start = (pageNumber - 1) * limit;
//   const end = pageNumber * limit;
//   return productsData.slice(start, end);
// }

// export function getSearchedProducts(query) {
//   if (!query) return null;
//   return productsData.filter((value) => {
//     return value.title.includes(query);
//   });
// }

// export function filterByPrice(price) {
//   const filteredProducts = productsData.filter((product) => {
//     return product.price <= price;
//   });

//   return filteredProducts;
// }

// export function beetween500To1000(price) {
//   if (!price) return null;
//   return productsData.filter((value) => {
//     return value.price > 500 && value.price < 1000;
//   });
// }

// export function above1000(price) {
//   if (!price) return null;
//   return productsData.filter((value) => {
//     return value.price >= 1000;
//   });
// }
