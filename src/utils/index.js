export function calculoConsolidado (inputMes, inputCompras, inputVentas) {

    const checkMonth = function(inputMes) {
        let consolidadoActual = JSON.parse(localStorage.getItem('consolidado'))
        let months = [];
        consolidadoActual.map(index => months.push(index.mes))
        return months.includes(inputMes)
    }

    if (inputCompras) {

        if (!checkMonth(inputMes)) {
            let consolidadoActual = JSON.parse(localStorage.getItem('consolidado'))
            let nuevoMes = {
                mes: inputMes,
                ventas: 0,
                compras: parseInt(inputCompras),
                deposito: 0,
                balance: 0
            }
            
            nuevoMes.balance = nuevoMes.ventas - nuevoMes.compras - nuevoMes.deposito
            consolidadoActual.push(nuevoMes)
            localStorage.setItem('consolidado', JSON.stringify(consolidadoActual))
        } else {
            let consolidadoActual = JSON.parse(localStorage.getItem('consolidado'))

            if (consolidadoActual.length) {
                consolidadoActual.map(arreglo => {
                    if(arreglo.mes === inputMes) {
                        arreglo.mes = inputMes;
                        arreglo.compras += parseInt(inputCompras);
                        arreglo.balance = arreglo.ventas - arreglo.compras - arreglo.deposito   
                    }
                })
                let updateConsolidado = JSON.stringify(consolidadoActual)
                localStorage.setItem('consolidado', updateConsolidado)
            } else {
                consolidadoActual.mes = inputMes;
                consolidadoActual.compras += parseInt(inputCompras);
                consolidadoActual.balance = consolidadoActual.ventas - consolidadoActual.compras - consolidadoActual.deposito
        
                let consolidadoActualizado = JSON.stringify(consolidadoActual)
                localStorage.setItem('consolidado', consolidadoActualizado)
            }
        }
     
    } else if (inputVentas) {
        
        if (!checkMonth(inputMes)) {
            let consolidadoActual = JSON.parse(localStorage.getItem('consolidado'))
            let nuevoMes = {
                mes: inputMes,
                ventas: parseInt(inputVentas),
                compras: 0,
                deposito: 0,
                balance: 0
            }
            
            nuevoMes.balance = nuevoMes.ventas - nuevoMes.compras - nuevoMes.deposito
            consolidadoActual.push(nuevoMes)
            localStorage.setItem('consolidado', JSON.stringify(consolidadoActual))
        } else {
            let consolidadoActual = JSON.parse(localStorage.getItem('consolidado'))

            if (consolidadoActual.length) {
                consolidadoActual.map(arreglo => {
                    if(arreglo.mes === inputMes) {
                        arreglo.mes = inputMes;
                        arreglo.ventas += parseInt(inputVentas);
                        arreglo.balance = arreglo.ventas - arreglo.compras - arreglo.deposito   
                    }
                })
                let updateConsolidado = JSON.stringify(consolidadoActual)
                localStorage.setItem('consolidado', updateConsolidado)

            } else {
                consolidadoActual.mes = inputMes;
                consolidadoActual.ventas += parseInt(inputVentas);
                consolidadoActual.balance = consolidadoActual.ventas - consolidadoActual.compras - consolidadoActual.deposito
        
                let consolidadoActualizado = JSON.stringify(consolidadoActual)
                localStorage.setItem('consolidado', consolidadoActualizado)
            }
        }
    }
}

export function init() {
    let movimiento = [{
        sku: 0,
        deposito: '',
        cantidad: 0,
        tipo: ''
    }]
    
    if(!localStorage.getItem('movimientos')) {
        localStorage.setItem('movimientos', JSON.stringify(movimiento))
    }
}

export function updateStock (SKU, deposito, cantidad, tipo) {

    let movimiento = {
        sku: parseInt(SKU),
        deposito: deposito,
        cantidad: parseInt(cantidad),
        tipo: tipo
    }

    const statusActual = JSON.parse(localStorage.getItem('movimientos'))
    statusActual.push(movimiento)
    localStorage.setItem('movimientos', JSON.stringify(statusActual))
 
}