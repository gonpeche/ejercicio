import React from 'react';
class CargaProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empresa: '',
            marca: '',
            SKU: '',
            nombreComercial: '',
            volumen: '',
            descripcion: ''
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
            empresa: '',
            marca: '',
            SKU: '',
            nombreComercial: '',
            volumen: '',
            descripcion: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (localStorage.getItem('productos')) {
            let catalogoProducto = JSON.parse(localStorage.getItem('productos'))
            catalogoProducto.push(this.state)
            localStorage.setItem('productos', JSON.stringify(catalogoProducto))
        } else {
            localStorage.setItem('productos', JSON.stringify([this.state]))
        }

        this.resetState() 
        
    }

    render() {
        return (
            <div style={{
                border: "2px solid black",
                padding: "10px",
                width: "300px"
                }}
            >
                <b>CARGA PRODUCTO:</b>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>
                                Empresa:
                                <input type="text" name="empresa" value={this.state.empresa} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Marca:
                                <input type="text" name="marca" value={this.state.marca} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                SKU:
                                <input type="number" name="SKU" value={this.state.SKU} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Nombre Comercial:
                                <input type="text" name="nombreComercial" value={this.state.nombreComercial} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Volumen:
                                <input type="text" name="volumen" value={this.state.volumen} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Descripcion:
                                <input type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleChange} />
                            </label>
                        </div>
                            <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CargaProducto;
