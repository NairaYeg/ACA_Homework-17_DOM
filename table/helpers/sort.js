import { sortingOrders} from "./constants.js";

const sortAge = (students, order) => {
  if (order === sortingOrders.random) {
    return students;
  }
  if (order === sortingOrders.asc) {
    return students.slice().sort((a, b) => a.age - b.age);
  }
  return students.slice().sort((a, b) => b.age - a.age);
};



  export {sortAge}