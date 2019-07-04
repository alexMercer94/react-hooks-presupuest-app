import React, { useState } from 'react';
import Error from './Error';
import shortID from 'shortid';

function Form({ saveExpense, saveCreateExpense }) {
    // State
    const [nameExpense, saveNameExpense] = useState('');
    const [amountExpense, saveAmountExpense] = useState(0);
    const [error, saveError] = useState(false);

    /**
     * When expense is added
     * @param {*} e Form's Event
     */
    const addExpense = e => {
        e.preventDefault();

        // Validar
        if (amountExpense <= 1 || isNaN(amountExpense) || nameExpense === '') {
            saveError(true);
            return;
        }

        //Construi objeto de gasto
        const expense = {
            nameExpense,
            amountExpense,
            id: shortID.generate()
        };

        // Pasar el gasto al componente principal
        saveExpense(expense);
        saveCreateExpense(true);
        // Eliminar alerta
        saveError(false);
        //Resetear el form
        saveNameExpense('');
        saveAmountExpense('');
    };

    return (
        <form onSubmit={addExpense}>
            <h2>Agrega tus Gastos Aquí</h2>
            {error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => saveNameExpense(e.target.value)}
                    value={nameExpense}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => saveAmountExpense(parseInt(e.target.value, 10))}
                    value={amountExpense}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto " />
        </form>
    );
}

export default Form;
