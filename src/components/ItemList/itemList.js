import Item from "../Item/item";
import React from 'react'

const ItemList = ({data = []}) => {
  return (
    data.map(phone => <Item key={phone.id} info={phone} />)
  )
}

export default ItemList