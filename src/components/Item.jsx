import { ListItemText, IconButton, Checkbox, ListItem } from "@mui/material";
import { removeItem, checkItem } from '../Handlers'
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

export function Item ({ setList, list, index, record }) {
    const Item = styled(ListItem)({
        backgroundColor: '#fff',
        "&:hover": {
            backgroundColor: '#eeeeee',
            borderBottom: 'solid 2px #dedede',
            transition: 'background 0.3s'
        }
    });

    return (
        <Item key={ index } secondaryAction={
            <>
                <Checkbox value={ record.checked } checked={ record.checked } onChange={() => checkItem(list, setList, index)}/>
                <IconButton 
                    edge="end" 
                    aria-label="delete"
                    onClick={() => removeItem(list, setList, index)}
                >
                    <DeleteIcon />
                </IconButton>
            </>
        }>
            <ListItemText 
                primary={record.productName} 
                secondary={`Quantidade: ${record.quantity || 0}`} 
            />
        </Item>
    )
}