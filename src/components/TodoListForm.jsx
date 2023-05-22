import { useState } from "react";
import { Grid, TextField , Button } from "@mui/material";

export function TodoListForm () {
    const [item, setItem] = useState({});

    function onChangeInput (e) {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    function createItem(e) {
        e.preventDefault();
        console.log(item);
    };

    return (
        <form onSubmit={createItem} >
            <Grid container direction='column'>
                <TextField name="productName" type="text" label="Produto" variant="standard" onChange={onChangeInput}/>
                <TextField name="quantity" type="number" label="Quantidade" variant="standard" onChange={onChangeInput}/>
                <Button type='submit'>Adicionar</Button>
            </Grid>
        </form>
    );
}