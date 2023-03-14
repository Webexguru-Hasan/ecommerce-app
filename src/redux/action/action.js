
export const ADDITEM = "ADDITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export const addItem = (product) => {
    return {
        type: ADDITEM,
        payload: product
    }
}

export const deleteItem  = () => {
    return {
        type: DELETE_ITEM
    }
}