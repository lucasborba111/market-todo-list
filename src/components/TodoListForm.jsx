import { useRef } from "react";
import { Grid, TextField , Button } from "@mui/material";

export function TodoListForm({ createItem }) {
    const productName = useRef('');
    const quantity = useRef('');
  
    return (
      <Grid container direction='column' sx={{flex: 0.3}}>
        <TextField name="productName" inputRef={productName} type="text" label="Produto" variant="standard" />
        <TextField name="quantity" inputProps={{min: 0, step: 1}} inputRef={quantity} type="number" label="Quantidade" variant="standard" />
        <Button onClick={() => createItem(productName, quantity)} > Adicionar </Button>
      </Grid>
    );
}