import * as React from 'react';
import { Grid, List } from "@mui/material";
import { Item } from './Item';

export function TodoList ({ list, setList }) {
    return (
        <Grid sx={{ flex: 0.6, display:'flex', flexDirection: 'column', height: '100%' }}>
            <h3>Lista de produtos:</h3>
            <List component="nav" aria-label="main mailbox folders">
                { 
                    list.map((record, index) => {
                        return (
                            <Item 
                                record = { record } 
                                index = { index } 
                                setList = { setList }
                                list = { list }
                            />
                        )
                    })
                }
            </List>
        </Grid>
    )
}