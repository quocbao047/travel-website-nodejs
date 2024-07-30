import './list.scss'
import Card from"../card/Card"
import { listData } from '../../../../../Travel Wings/react-estate-ui-completed/src/lib/dummydata'

function List({posts}){
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List