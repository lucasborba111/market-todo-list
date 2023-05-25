function createItem(list, setList, productName, quantity) {
    if(!(productName.current.value).trim()) return;
    if(list?.length === 5) return alert('Número máximo de itens atingido');

    setList((prevList) => [
      ...prevList,
      {
        productName: productName.current.value,
        quantity: quantity.current.value,
        checked: false
      }
    ]);
  }

  function removeItem (list, setList, index) {
    setList(list.filter((_, position) => position !== index));
  }

  function checkItem (list, setList, index) {
    const newList = list.map((record, position) => {

    if(position === index) {
    record.checked = !record.checked
    }
      return record;
    });

    setList(newList);
  }

  export { createItem, removeItem, checkItem }