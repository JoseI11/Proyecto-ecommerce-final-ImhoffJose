
import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({ productos2 }) => {
  return (
    <div className='itemList'>
  
      {
        productos2?.map(prod => (
          <Item key={prod.id} prod1={prod} />
        ))
      }
    </div>
  )


}
export default ItemList