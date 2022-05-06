import React, { Component } from 'react';
import './Crypto.css';



class Crypto extends Component {
    constructor() {
        super()
        this.state = {
            coins: 0
        };
    }

    handleOnChange = e => {
        this.setState({
            coins: Number(e.target.value)
        });
    }

    
    
shouldComponentUpdate(props, state) {
    return !(state.coins % 10);
}

    render() {
        return (
            <div>
                <div className="Coins">
                    <h1>Compra Cyptocoins</h1>
                    <div className="question">
                        <p>¿cuantos dolares tienes?</p>
                        <p>
                            <input
                            placeholder='0'
                            onChange={this.handleOnChange}
                            type='number'
                            />
                        </p>
                    </div>

                    <div className='answer'>
                        <p>Precio de Cyptocoin: $10</p>
                        <p>
                            puedes comprar <strong>{this.state.coins/10}</strong> coins.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crypto;