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

export const mockRestaurants = [
  {
    name: "Sushi Restaurant",
    id: "1",
    image: sushi,
    tags: ["sushi", "Japanese", "food"],
  },
  {
    name: "Pizzeria",
    id: "2",
    image: pizza,
    tags: ["pizza", "Italian", "food"],
  },
  {
    name: "Burger Joint",
    id: "3",
    image: burger,
    tags: ["burger", "American", "food"],
  },
  {
    name: "Coffee Shop",
    id: "4",
    image: coffee,
    tags: ["coffee", "cafe", "food"],
  },
  {
    name: "Ice Cream Shop",
    id: "5",
    image: iceCream,
    tags: ["ice cream", "dessert", "food"],
  },
  {
    name: "Bar",
    id: "6",
    image: bar,
    tags: ["bar", "drinks"],
  },
  {
    name: "Bakery",
    id: "7",
    image: bakery,
    tags: ["bakery", "bread", "food"],
  },
  {
    name: "Diner",
    id: "8",
    image: diner,
    tags: ["diner", "American", "food"],
  },
  {
    name: "Food Truck",
    id: "9",
    image: foodTruck,
    tags: ["food truck", "street food", "food"],
  },
  {
    name: "Steakhouse",
    id: "10",
    image: steak,
    tags: ["steakhouse", "American", "food"],
  },
  {
    name: "Tea House",
    id: "11",
    image: tea,
    tags: ["tea", "cafe", "food"],
  },
  {
    name: "Winery",
    id: "12",
    image: winery,
    tags: ["winery", "drinks"],
  },
  {
    name: "Indian Restaurant",
    id: "13",
    image: indian,
    tags: ["indian", "Indian", "food"],
  },
];

// extract a list of tags from the mockRestaurants
export const tags = mockRestaurants.reduce((acc, restaurant) => {
  restaurant.tags.forEach((tag) => {
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc;
}, [] as string[]);
