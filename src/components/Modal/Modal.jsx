import { Backdrop, ModalWindow } from './Modal.styled'
import React, { Component } from 'react';

export class Modal extends Component {
    
    handleClick = (e) => {
        if (e.code === 'Escape') {
            this.props.onModalClose();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleClick)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleClick)
    }

    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onModalClose()
        }        
    }

    render() {
        return (
            <Backdrop onClick={this.handleBackdropClick}>
                <ModalWindow>{this.props.children}</ModalWindow>
            </Backdrop>
        );
    }
}