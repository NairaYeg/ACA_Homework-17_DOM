
  function removeAllRows(tbody) {
      let size =  tbody.rows.length
      for (let i = size-1; i >= 0; i--) {
        tbody.deleteRow(i);
     }
  }

  export {removeAllRows}

