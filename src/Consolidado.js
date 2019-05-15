import React, { Component } from 'react';
export default class Consolidado extends Component {
    
    content() {
        const { consolidado } = this.props
        const consolidadoParseado = JSON.parse(consolidado)
        const flujo = consolidadoParseado.map( (item, i) => {
            return (
                <tr key={i} >
                    <td>{item.mes}</td>
                    <td>$ {item.compras}</td>
                    <td>$ {item.ventas}</td>
                    <td>$ {item.deposito}</td>
                    <td>$ {item.balance}</td>
                </tr>  
            )
        })

        return flujo
    }
    render() {
        const flujoValores = this.props.consolidado
        const data = flujoValores ? this.content() : null

        return (
            <div class="contenido">
            <b>FLUJO DE VALORES:</b>
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
}