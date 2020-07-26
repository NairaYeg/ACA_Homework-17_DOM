const sortAge = (students) => {
      return students.slice().sort((a, b) => {
        if (a.age > b.age) {
          return 1;
        }
        if (a.age < b.age) {
          return -1;
        }
        return 0;
      });
  };

  export {sortAge}