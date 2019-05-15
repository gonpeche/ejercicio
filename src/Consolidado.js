import React, { Component } from 'react';

export default class Consolidado extends Component {
    
    update() {
        let consolidado = localStorage.getItem('consolidado');
        this.setState({ consolidado });
        console.log(JSON.parse(consolidado))
    }

    content() {
        const { consolidado } = this.props
        const consolidadoParseado = JSON.parse(consolidado)
        const data = consolidadoParseado.map( (item, i) => {
            return (
                <tr key={i}>
                    <td>{item.mes}</td>
                    <td>{item.compras}</td>
                    <td>{item.ventas}</td>
                    <td>{item.deposito}</td>
                    <td>{item.balance}</td>
                </tr>  
            )
        })

        return (
            <div class="contenido">
                {/* <button onClick={this.update}>Refrescar</button> */}
                <table>
                    <tr>
                        <th>Mes</th>
                        <th>Compras</th> 
                        <th>Ventas</th>
                        <th>Deposito</th>
                        <th>Balance</th>
                    </tr>
                    {data}
                </table>
            </div>
        )
    }
    render() {
        const flujoValores = this.props.consolidado
        return flujoValores ? this.content() : null
    }
}