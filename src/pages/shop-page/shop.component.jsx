import React from 'react';
import {Routes, Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';

const ShopPage = (props) => {

    return(
        <div className="shop-page">
            <Routes>
                <Route index element={<CollectionOverview />} />
                <Route path='/:collectionID' element={<CollectionPage />} />
            </Routes>
        </div>
    )
};

export default ShopPage;