import * as React from 'react';
import { List, ListItem, ListItemText } from "@mui/material";

export function TodoList ({ items }) {
    function generate(element) {
        return [items].map((value)=> (
            React.cloneElement(element, {
                key: value
            }
        )));
    }

    return (
        <List>
            {
                generate (
                    <ListItem>
                        <ListItemText primary={'teste'} />
                    </ListItem>
                )
            }
        </List>
    )
}