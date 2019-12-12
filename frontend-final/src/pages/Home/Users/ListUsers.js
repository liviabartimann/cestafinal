import React, { Component } from 'react';

import './index.css'

export default class ListUsers extends Component {

    render() {
        const { user } = this.props;
        return (
            <div className="users-card">
                <p className='user'>
                    {user.name}
                </p>
                <p className='user'>
                    {user.email}
                </p>
                <div className='buttons-user-actions'>
                    <button className='button-action'>
                        <img className='button-action-image' src='/images/delete.png' alt='seta-direita' />
                    </button>
                </div>
            </div>
        );
    }
}