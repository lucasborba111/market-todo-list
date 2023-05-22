import { useState, useRef, useEffect } from "react";
import { Grid, TextField , Button } from "@mui/material";

export function TodoListForm() {
    const [list, setList] = useState([]);
    const productName = useRef('');
    const quantity = useRef('');
    
    useEffect(() => {
        console.log(list);
    }, [list]);
  
    function createItem(e) {
        e.preventDefault();
        setList((prevList) => [
            ...prevList,
            { 
                productName: productName.current.value,
                quantity: quantity.current.value
            }
        ]);
        productName.current.value = '';
        quantity.current.value = '';
    }
  
    return (
      <form onSubmit={createItem}>
        <Grid container direction='column'>
          <TextField name="productName" inputRef={productName} type="text" label="Produto" variant="standard" />
          <TextField name="quantity" inputRef={quantity} type="number" label="Quantidade" variant="standard" />
          <Button type='submit'>Adicionar</Button>
        </Grid>
      </form>
    );
}