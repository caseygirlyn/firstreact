import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Packinglistitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.packinglist.isdeleted ? 'line-through' : 'none'
    }
  }
  render() {
    const { id, item} = this.props.packinglist;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange= {this.props.markDelete.bind(this, id)}/> {' '}
          { item } {' '}
          <button onClick={this.props.delPackinglist.bind(this,id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}
Packinglistitem.propTypes = {
  packinglist: PropTypes.object.isRequired
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  outline: 'none'
}
export default Packinglistitem
