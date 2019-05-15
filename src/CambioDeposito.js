import React, { Component } from 'react'

export default class CambioDeposito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SKU: '',
            cantidad: '',
            depositoOrigen: '',
            depositoDestino: ''
        };
    }

    render() {
        return (
            <div style={{
                border: "2px solid black",
                padding: "10px",
                marginTop: "2px",
                width: "300px"
                }}
            >
                CAMBIO DEPOSITO:
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>
                                SKU:
                                <input type="number" name="SKU" value={this.state.SKU} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Cantidad:
                                <input type="text" name="cantidad" value={this.state.cantidad} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Deposito Origen:
                                <input type="text" name="deposito" value={this.state.deposito} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Deposito Destino:
                                <input type="number" name="precioVenta" value={this.state.precioVenta} onChange={this.handleChange} />
                            </label>
                        </div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
