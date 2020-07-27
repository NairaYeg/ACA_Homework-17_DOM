const sortAge = (students) => {
      return students.slice().sort((a, b) => a.age - b.age);
  }

  export {sortAge}