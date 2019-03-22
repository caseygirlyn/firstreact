import React, { Component } from 'react';
import Packinglistitem from './Packinglistitem';
import PropTypes from 'prop-types';

class Packinglist extends Component {
  render() {
    return this.props.packinglist.map((packinglist) =>
        <Packinglistitem key={packinglist.id} packinglist={packinglist} markDelete = {this.props.markDelete} delPackinglist = {this.props.delPackinglist}/>
    );
  }
}
Packinglist.propTypes = {
    packinglist: PropTypes.array.isRequired
}
export default Packinglist;
