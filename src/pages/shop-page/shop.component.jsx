import React, {useState} from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.js';

const ShopPage = () => {
    const [shopData, setShopData] = useState(SHOP_DATA);


    return(
        <div className="shop_page">
            {
                shopData.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

export default ShopPage;