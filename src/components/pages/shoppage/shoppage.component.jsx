import React from 'react';
import SHOPDATA from '../shoppage/shop.data.js';
import CollectionPreview from '../../collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = SHOPDATA;
    }


    render() {
        const collections = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}

            </div>
        );
    }

}

export default ShopPage;