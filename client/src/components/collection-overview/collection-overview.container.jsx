import WithSpinner from '../with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import  {connect} from 'react-redux';
import CollectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
    // isloading should be the same variable as expected by WithSpinner component
    // isLoading: selectIsCollectionFetching
    isloading:state=>!selectIsCollectionLoaded(state)
  });
  
  const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);
  
  export default CollectionOverviewContainer;