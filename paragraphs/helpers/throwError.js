
function throwError(value) {
    if (!value) {
      alert("Your input is not valid!!!!");
      throw new Error("Not valid input");
    }
  }

export {throwError}