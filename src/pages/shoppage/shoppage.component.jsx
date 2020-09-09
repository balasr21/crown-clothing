import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotsToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import updateCollections from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { Route } from 'react-router-dom';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const colletionRef = firestore.collection('collections');

        // Below way of using OnSnapshot gets subscribed to observable everytime there is a change in the collection
        // this.unSubscribeFromSnapshot = colletionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionSnapshotsToMap(snapshot);
        //     updateCollections(collectionMap);
        //     console.log('UpdatedCollections')
        //     this.setState({ loading: false });
        // })

        // Below way of using get() is called only when componentDidMount() is invoked and only one time
        // Returns a promise

        
        colletionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotsToMap(snapshot);
            updateCollections(collectionMap);
            console.log('UpdatedCollections')
            this.setState({ loading: false });
        });


    }


    render() {
        const { match } = this.props;
        const { loading } = this.state;
        console.log("Isloading :" + loading);
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isloading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isloading={loading} {...props} />} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);