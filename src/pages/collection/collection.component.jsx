import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { changeShopParams } from '../../redux/shop/shop.actions';

import './collection.styles.scss';

const CollectionPage = ({collection, changeParams}) => {
    const params = useParams();
    const { title, items } = collection;

    useEffect(() => {
        changeParams(params.collectionID);
    })

    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />    
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    collection: selectCollection(state.shop.params)(state)
})

const mapDispatchToProps = dispatch => ({
    changeParams: item => dispatch(changeShopParams(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);