import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundaries/error-boundaries.component';
import fetchCollectionStartAsync from '../../redux/shop/shop.actions';


const CollectionOverviewContainer=lazy(()=>import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer=lazy(()=>import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionStartAsync, match }) => {

    useEffect(() => {
        fetchCollectionStartAsync();
    }, [fetchCollectionStartAsync])

    return (
        <div className='shop-page'>
            <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
            </ErrorBoundary>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);