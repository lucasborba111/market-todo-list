import { useState } from "react";

export function TodoListForm () {
    const [item, setItem] = useState({});

    function onChangeInput (e) {
        setItem({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    function createItem(e) {
        e.preventDefault();
        console.log(item);
    };

    return (
        <form onSubmit={createItem}>
            <input name="productName" type="text" placeholder="Produto" onChange={onChangeInput}/>
            <input name="quantity" type="number" placeholder="Quantidade" onChange={onChangeInput}/>
            <button>Adicionar</button>
        </form>
    );
}