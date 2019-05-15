import React, { Component } from 'react'
import { calculoConsolidado } from './utils'
export default class Compra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SKU: '',
            cantidad: '',
            deposito: '',
            compras: '',
            mes: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    resetState() {
        this.setState({
            SKU: '',
            cantidad: '',
            deposito: '',
            compras: '',
            mes: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault(); 
        let tipo = 'compra';
        let checkSKU = this.checkSKU(this.state.SKU)
        if (!checkSKU) return false // checkea que el SKU exista
        
        if (!localStorage.getItem('consolidado')) {
            this.inicioConsolidado()
        }
        
        let { mes, compras, SKU, deposito, cantidad } = this.state
        calculoConsolidado(mes, compras)

        this.props.update(SKU, deposito, cantidad, tipo)
        this.resetState() 
    }

    inicioConsolidado() {
        let flujoValores = {
            mes: 'enero',
            ventas: 0,
            compras: 0,
            deposito: 0,
            balance: 0,
        }
        localStorage.setItem('consolidado', JSON.stringify([flujoValores]))
    }


    checkSKU(SKU) {
        let catalogoProductos = JSON.parse(localStorage.getItem('productos'))
        for (var i = 0; i < catalogoProductos.length; i++) {
            if (catalogoProductos[i].SKU === SKU) return true
        }
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
                <b>COMPRA</b>
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
                                Deposito:
                                <input type="text" name="deposito" value={this.state.deposito} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Costo Compra:
                                <input type="number" name="compras" value={this.state.compras} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Mes:
                                <input type="text" name="mes" value={this.state.mes} onChange={this.handleChange} />
                            </label>
                        </div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
