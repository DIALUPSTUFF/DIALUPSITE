import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/magazinePage.css'

let cx = classNames.bind(styles);

class PreviewRow extends React.Component {

    render() {
        return (
             <img className={classNames(cx('magazineCovers'))} src= {this.props.picPath} />
        );
    }
}

export default PreviewRow;
