import ShopActionTypes from './shop.types';
import {firestore,convertCollectionSnapshotsToMap} from '../../firebase/firebase.utils';

const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

const fetchCollectionStartAsync = () => {
    return dispatch => {
        console.log("Starting Async");
        // Below way of using OnSnapshot gets subscribed to observable everytime there is a change in the collection
        // this.unSubscribeFromSnapshot = colletionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionSnapshotsToMap(snapshot);
        //     updateCollections(collectionMap);
        //     console.log('UpdatedCollections')
        //     this.setState({ loading: false });
        // })

        // Below way of using get() is called only when componentDidMount() is invoked and only one time
        // Returns a promise
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection('collections');

        // Once function gets called, set loading to true
        

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotsToMap(snapshot);
            // Once Collection is received, dispatch the result :collections
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => { dispatch(fetchCollectionsFailure(error)) });

    }
}

export default fetchCollectionStartAsync;