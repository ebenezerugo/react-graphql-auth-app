import ItemComponent from "./item.component";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../store/item.slice';
import { RootState } from "../store/store";
import { useQuery } from '@apollo/client';
import GET_ITEMS from "../queries/get-item.query";
import Item from "../models/item.model";



const ItemsComponent = () => {

    const items = useSelector((state: RootState) => state.items);
    
    const { loading, error, data } = useQuery(GET_ITEMS, {
        variables: {page: 1, count: 10}
    });

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    
    if (error || !data) {
        return (
            <div className="alert alert-danger" role="alert">
                {error && error.message}
            </div>
        );
    }
          
    return (
        <div className="row">
            {data.getItems.items.map((item: Item, index: number) => {
                return <div key={index} className="col-md-4">
                    <ItemComponent uuid={item.uuid} name={item.name} description={item.description} />
                </div>
            })}
        </div>
    );
}

export default ItemsComponent;