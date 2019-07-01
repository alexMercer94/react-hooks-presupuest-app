import React, { Fragment, useState } from 'react';

function Question() {
    // Definir el state
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);

    // Validar presupuesto
    const addBudget = e => {
        e.preventDefault();

        // Validar
        if (amount <= 1 || amount === null) {
            saveError(true);
            return;
        }

        // Si pasa la validación
    };

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => saveAmount(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto" />
            </form>
        </Fragment>
    );
}

export default Question;
