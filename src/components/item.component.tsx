import React from 'react';
import Item from '../models/item.model';

const ItemComponent: React.FC<Item> = ({uuid, name, description}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Name</h6>
                <h5 className="card-title">{name}</h5>

                <div className='mt-4'>
                    <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                    <p className="card-text">{description}</p>
                </div>
                <div className='d-flex flex-row-reverse'>
                    <button type="button" className="btn btn-secondary card-link">Delete</button>
                    <button type="button" className="btn btn-outline-secondary card-link mx-3">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default ItemComponent;