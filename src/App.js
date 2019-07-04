import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
    // State del presupuesto
    const [budget, saveBudget] = useState(0);
    const [remaining, saveRemaining] = useState(0);
    const [questionBudget, saveQuestionBudget] = useState(true);
    const [createExpense, saveCreateExpense] = useState(false);
    const [expense, saveExpense] = useState({});
    const [expenses, saveExpenses] = useState([]);

    useEffect(() => {
        if (createExpense) {
            const expenselist = [...expenses, expense];
            saveExpenses(expenselist);

            // Restar el presupuesto
            const remainingBudget = remaining - expense.amountExpense;
            saveRemaining(remainingBudget);

            // Una ves agregado el gasto, poner en false createExpense
            saveCreateExpense(false);
        }
    }, [createExpense, expense, expenses, remaining]);

    return (
        <div className="App container">
            <header>
                <h1>Gasto semanal</h1>
                <div className="contenido-principal contenido">
                    {questionBudget ? (
                        <Question
                            saveBudget={saveBudget}
                            saveQuestionBudget={saveQuestionBudget}
                            saveRemaining={saveRemaining}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Form saveExpense={saveExpense} saveCreateExpense={saveCreateExpense} />
                            </div>
                            <div className="one-half column">
                                <List expenses={expenses} />
                                <BudgetControl budget={budget} remaining={remaining} />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
