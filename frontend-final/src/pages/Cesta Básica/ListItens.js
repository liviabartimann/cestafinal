import React, { Component } from 'react';

export default class ListItens extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="users-card">
                <p className='user'>
                    {item.aumont}
                </p>
                <p className='user'>
                    {item.description}
                </p>
                <p className='user'>
                    {item.uniqueValue}
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