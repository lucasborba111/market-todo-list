import * as React from 'react';
import { Grid, List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

export function TodoList ({ items, removeItem, checkHandler }) {
    const Item = styled(ListItem)({
        backgroundColor: '#fff',
        "&:hover": {
            backgroundColor: '#eeeeee',
            borderBottom: 'solid 2px #dedede',
            transition: 'background 0.3s'
        }
    });

    return (
        <Grid sx={{ flex: 0.6, display:'flex', flexDirection: 'column', height: '100%' }}>
            <h3>Lista de produtos:</h3>
            <List component="nav" aria-label="main mailbox folders">
                { 
                    items.map((record, index)=> {
                        return (
                            <Item key={index} secondaryAction={
                                <Grid>
                                    <Checkbox value={record.checked} checked={record.checked} onChange={() => checkHandler(index)}/>
                                    <IconButton edge="end" aria-label="delete" onClick={() => removeItem(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                              }>
                                <ListItemText 
                                    primary={record.productName} 
                                    secondary={`Quantidade: ${record.quantity || 0}`} 
                                />
                            </Item>
                        )
                    })
                }
            </List>
        </Grid>
    )
}