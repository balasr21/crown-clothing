import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections);


export const selectShopCollection = memoize(collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : null
);


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);


export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    // !! returns boolean value
    shop => !!shop.collections
)