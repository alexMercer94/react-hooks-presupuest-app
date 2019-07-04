import React from 'react';

const Expense = ({ expense }) => {
    const deleteExpense = id => {
        console.log(id);
    };

    return (
        <li className="gastos">
            <p>
                {expense.nameExpense}
                <span className="gasto">$ {expense.amountExpense}</span>
                <button type="button" onClick={() => deleteExpense(expense.id)}>
                    Delete
                </button>
            </p>
        </li>
    );
};

export default Expense;
