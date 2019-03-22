import React, { Component } from 'react'

export class AddPackinglist extends Component {
    state = {
        item: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPackinglist(this.state.item);
        this.setState({item: ''})
    }
    onChange = (e) => this.setState({ item : e.target.value}) 
    render() {
        return (
        <form onSubmit={this.onSubmit} style={{display: 'flex', padding: '5px'}}>
            <input 
            type='text' 
            name='item' 
            style={{flex: '10', padding: '5px', outline: 'none'}} 
            placeholder='Add Packing List...' 
            value={this.state.item} 
            onChange={this.onChange}/>
            <input type='submit' value='+' className='btn'/>
        </form>
        )
    }
}

export default AddPackinglist
