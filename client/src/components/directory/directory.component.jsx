import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import '../directory/directory.styles.scss';

const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...OtherSectionProps }) => (
                    <MenuItem key={id} {...OtherSectionProps} />
                ))
            }
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
}
)

export default connect(mapStateToProps)(Directory);