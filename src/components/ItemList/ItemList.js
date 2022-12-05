
import Prodisenio from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({ productos2 }) => {
  return (
    <div className='itemList'>
      {
        productos2.map(prod => (
          <Prodisenio key={prod.id} prod1={prod} />
        ))
      }
    </div>
  )


}
export default ItemList