const locations = [
  {
    id: 1,
    name: "Málaga"
  }, {
    id: 2,
    name: "Sevilla"
  }, {
    id: 3,
    name: "Jaén"
  }, {
    id: 4,
    name: "Córdoba"
  }, {
    id: 5,
    name: "Huelva"
  }, {
    id: 6,
    name: "Almería"
  }, {
    id: 7,
    name: "Granada"
  }
];
const restaurants = [
  {
    id: 1,
    name: "Le bistro",
    location_id: 1
  },
  {
    id: 2,
    name: "Casa Pepe",
    location_id: 2
  },
  {
    id: 3,
    name: "Telepizza",
    location_id: 5
  },
  {
    id: 4,
    name: "Taberna de cuáqueros",
    location_id: 1
  },
  {
    id: 5,
    name: "La parrilla",
    location_id: 6
  },
  {
    id: 6,
    name: "Las gaviotas",
    location_id: 4
  },
  {
    id: 7,
    name: "Gastrobar",
    location_id: 7
  },
  {
    id: 8,
    name: "Bar-bacoa",
    location_id: 2
  },
  {
    id: 9,
    name: "Bar-bacoa2",
    location_id: 3
  },
];

const offers = [
  {
    "id": 1,
    "product_name": "Salmorejo",
    "price": 3.20,
    "restaurant_id": 1,
  },
  {
    "id": 2,
    "product_name": "Potaje",
    "price": 2.50,
    "restaurant_id": 1,
  },
  {
    "id": 3,
    "product_name": "Ensalada mixta",
    "price": 2.75,
    "restaurant_id": 2,
  },
  {
    "id": 4,
    "product_name": "Macarrones bolognesa",
    "price": 3.15,
    "restaurant_id": 2,
  },
  {
    "id": 5,
    "product_name": "Macarrones bolognesa",
    "price": 3.15,
    "restaurant_id": 3,
  },
  {
    "id": 6,
    "product_name": "Lasagna",
    "price": 2.65,
    "restaurant_id": 3,
  },
  {
    "id": 7,
    "product_name": "Spaguetti",
    "price": 1.15,
    "restaurant_id": 3,
  },
  {
    "id": 8,
    "product_name": "Huevos rotos",
    "price": 2.15,
    "restaurant_id": 4,
  },
  {
    "id": 9,
    "product_name": "Pollo barbacoa",
    "price": 2.80,
    "restaurant_id": 5,
  },
  {
    "id": 10,
    "product_name": "Costillas asadas",
    "price": 2.95,
    "restaurant_id": 6,
  },
  {
    "id": 11,
    "product_name": "Brócoli",
    "price": 1.15,
    "restaurant_id": 5,
  },
  {
    "id": 12,
    "product_name": "Ensalada César",
    "price": 1.65,
    "restaurant_id": 9,
  },
];

module.exports = {
  locations,
  offers,
  restaurants
}