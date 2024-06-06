import sushi from "../../assets/images/sushi.jpg";
import pizza from "../../assets/images/pizza.jpg";
import burger from "../../assets/images/burger.jpg";
import coffee from "../../assets/images/coffee.jpg";
import iceCream from "../../assets/images/ice-cream.jpg";
import bar from "../../assets/images/bar.jpg";
import bakery from "../../assets/images/bakery.jpg";
import diner from "../../assets/images/diner.jpg";
import foodTruck from "../../assets/images/food-truck.jpeg";
import steak from "../../assets/images/steak.jpg";
import tea from "../../assets/images/tea.jpg";
import winery from "../../assets/images/winery.jpg";
import indian from "../../assets/images/indian.jpg";

export type Restaurant = {
  name: string;
  shortDesc: string;
  longDesc: string; // Add longDesc describing the quality of the restaurant, the type of food, etc., min 300 characters, max 500 characters
  id: string;
  image: string;
  tags: string[];
  address?: string;
  mapsLink?: string;
  restaurantLink?: string;
};

export const mockRestaurants: Restaurant[] = [
  {
    name: "Sushi Restaurant",
    shortDesc: "The best sushi in town",
    longDesc:
      "Sushi Restaurant is the best place to get sushi in town. We have a wide variety of sushi, sashimi, and other Japanese dishes. Our fish is always fresh and our chefs are highly skilled. Come in today for a delicious meal!",
    id: "1",
    image: sushi,
    tags: ["sushi", "Japanese", "food"],
    address: "123 Main St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/123+Main+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Pizzeria",
    shortDesc: "Authentic Italian pizza",
    longDesc:
      "Pizzeria is the best place to get pizza in town. Our pizza is made with fresh ingredients and cooked in a wood-fired oven. We have a wide variety of toppings to choose from, so you can create your perfect pizza. Come in today for a slice!",
    id: "2",
    image: pizza,
    tags: ["pizza", "Italian", "food"],
    address: "456 Elm St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/456+Elm+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Burger Joint",
    shortDesc: "The best burgers in town",
    longDesc:
      "Burger Joint is the best place to get a burger in town. Our burgers are made with high-quality beef and cooked to perfection. We have a wide variety of toppings to choose from, so you can create your perfect burger. Come in today for a delicious meal!",
    id: "3",
    image: burger,
    tags: ["burger", "American", "food"],
    address: "789 Oak St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/789+Oak+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Coffee Shop",
    shortDesc: "The best coffee in town",
    longDesc:
      "Coffee Shop is the best place to get coffee in town. Our coffee is made with high-quality beans and brewed to perfection. We have a wide variety of drinks to choose from, so you can find your perfect cup of coffee. Come in today for a delicious drink!",
    id: "4",
    image: coffee,
    tags: ["coffee", "cafe", "food"],
    address: "101 Pine St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/101+Pine+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Ice Cream Shop",
    shortDesc: "The best ice cream in town",
    longDesc:
      "Ice Cream Shop is the best place to get ice cream in town. Our ice cream is made with high-quality ingredients and churned to perfection. We have a wide variety of flavors to choose from, so you can find your perfect scoop. Come in today for a delicious treat!",
    id: "5",
    image: iceCream,
    tags: ["ice cream", "dessert", "food"],
    address: "202 Maple St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/202+Maple+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Bar",
    shortDesc: "The best drinks in town",
    longDesc:
      "Bar is the best place to get drinks in town. Our bar is stocked with a wide variety of beers, wines, and cocktails. We have a cozy atmosphere and friendly staff, so you can relax and enjoy your drink. Come in today for a delicious beverage!",
    id: "6",
    image: bar,
    tags: ["bar", "drinks"],
    address: "303 Cedar St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/303+Cedar+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Bakery",
    shortDesc: "The best bread in town",
    longDesc:
      "Bakery is the best place to get bread in town. Our bakery is stocked with a wide variety of breads, pastries, and other baked goods. We use high-quality ingredients and traditional baking techniques to create delicious treats. Come in today for a tasty snack!",
    id: "7",
    image: bakery,
    tags: ["bakery", "bread", "food"],
    address: "404 Walnut St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/404+Walnut+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Diner",
    shortDesc: "The best diner in town",
    longDesc:
      "Diner is the best place to get diner food in town. Our diner is stocked with a wide variety of classic American dishes, from burgers to pancakes. We use high-quality ingredients and traditional cooking techniques to create delicious meals. Come in today for a tasty treat!",
    id: "8",
    image: diner,
    tags: ["diner", "American", "food"],
    address: "505 Spruce St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/505+Spruce+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Food Truck",
    shortDesc: "The best street food in town",
    longDesc:
      "Food Truck is the best place to get street food in town. Our food truck is stocked with a wide variety of dishes, from tacos to falafel. We use high-quality ingredients and traditional cooking techniques to create delicious meals. Come in today for a tasty treat!",
    id: "9",
    image: foodTruck,
    tags: ["food truck", "street food", "food"],
    address: "606 Pine St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/606+Pine+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Steakhouse",
    shortDesc: "The best steak in town",
    longDesc:
      "Steakhouse is the best place to get steak in town. Our steakhouse is stocked with a wide variety of cuts, from ribeye to filet mignon. We use high-quality ingredients and traditional cooking techniques to create delicious meals. Come in today for a tasty treat!",
    id: "10",
    image: steak,
    tags: ["steakhouse", "American", "food"],
    address: "707 Elm St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/707+Elm+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Tea House",
    shortDesc: "The best tea in town",
    longDesc:
      "Tea House is the best place to get tea in town. Our tea house is stocked with a wide variety of teas, from green to oolong. We use high-quality ingredients and traditional brewing techniques to create delicious drinks. Come in today for a tasty treat!",
    id: "11",
    image: tea,
    tags: ["tea", "cafe", "food"],
    address: "808 Cedar St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/808+Cedar+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Winery",
    shortDesc: "The best wine in town",
    longDesc:
      "Winery is the best place to get wine in town. Our winery is stocked with a wide variety of wines, from red to white. We have a cozy atmosphere and friendly staff, so you can relax and enjoy your drink. Come in today for a delicious beverage!",
    id: "12",
    image: winery,
    tags: ["winery", "drinks"],
    address: "909 Walnut St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/909+Walnut+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
  {
    name: "Indian Restaurant",
    shortDesc: "The best Indian food in town",
    longDesc:
      "Indian Restaurant is the best place to get Indian food in town. We have a wide variety of dishes, from curries to tandoori. Our food is always fresh and our chefs are highly skilled. Come in today for a delicious meal!",
    id: "13",
    image: indian,
    tags: ["indian", "Indian", "food"],
    address: "1010 Spruce St, New York, NY 10001",
    mapsLink:
      "https://www.google.com/maps/place/1010+Spruce+St,+New+York,+NY+10001",
    restaurantLink: "https://www.example.com",
  },
];

export const tags = [
  "sushi",
  "Japanese",
  "food",
  "pizza",
  "Italian",
  "burger",
  "American",
  "coffee",
  "cafe",
  "ice cream",
  "dessert",
  "bar",
  "drinks",
  "bakery",
  "bread",
  "diner",
  "food truck",
  "street food",
  "steakhouse",
  "tea",
  "winery",
  "indian",
  "Indian",
];
