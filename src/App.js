import React from 'react';
import './App.css';
import CargaProducto from './CargaProducto';
import Venta from './Venta';
import Compra from './Compra';
import Consolidado from './Consolidado';
import { updateStock, init } from './utils';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        consolidado: '',
        existencias: ''
    }
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    const consolidado = localStorage.getItem('consolidado');
    const existencias = localStorage.getItem('existencias');
    this.setState({ consolidado, existencias })
    init()
  }

  update(sku, deposito, cantidad, tipo) {
    updateStock(sku, deposito, cantidad, tipo);
    this.setState({
      consolidado: localStorage.getItem('consolidado'),
      existencias: localStorage.getItem('existencias')
    })
  }

  render() {
    const { consolidado } = this.state

    return (
      <div>
        <div className="App">
          <div className="sidebar">
            <CargaProducto />
            <Venta update={this.update}/>
            <Compra update={this.update} />
            
          </div>
          <div className="consolidado">
            <Consolidado 
              consolidado={consolidado ? consolidado : null}
              />
          </div>
        </div>
        <div className="notas">
          <h3>Notas:</h3>
          <p>Primero cargar un producto, luego cargar una compra y por ultimo realizar una venta. Ninguna operación de venta o compra se va a realizar si el SKU no fue cargado previamente</p>
          <p>La opcion de movimiento de depositos y costo de deposito no está resuelta</p>
        </div>
      </div>
    );
  }
}

export default App;
