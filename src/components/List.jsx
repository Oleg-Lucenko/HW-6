import { useContext } from "react";
import { Context } from '../App';
import './components.css';

function List() {

    const items = useContext(Context);

  
    return (
            <div>
                {items && items.map(item => (
                    <div key={item.id} className="user-container">
                        <p>{item.id}.</p>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <p>{item.maidenName}</p>
                    </div>
                ))}
            </div>
    );
}
  
  export default List;