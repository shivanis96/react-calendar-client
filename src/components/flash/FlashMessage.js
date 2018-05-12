import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from'classnames;'

class FlashMessagesList extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render(){
        const{ id, type, text } = this.prop.message;
        return(
            <div className={classnames('alert',{
                'alter-success':type === 'success',
                'alert-danger':type === 'error'
            })}>
                <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        );
    }
}
FlashMessages.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

export default (FlashMessages);
