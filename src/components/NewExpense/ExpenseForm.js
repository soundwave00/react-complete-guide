import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //per il secondo e terzo metodo
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    const titleChangeHendler = (event) => {
        setEnteredTitle(event.target.value);

        //secondo metodo
        /* setUserInput({
            ...userInput, // viene inserito per non perdere lo stato della Data e dell'Amount
            enteredTitle: event.target.value,
        }); */
        //terzo metodo con questo metodo react ci da la certezza che il prevState sia al 100% lo stato subito precedente a questo, è il metodo più sicuro.
        /* setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }); */
    };

    const amountChangeHendler = (event) => {
        setEnteredAmount(event.target.value); //il value in questo caso anche se inseriamo un numero risulterà essere una stringa per questo viene creato uno state ''

        //secondo metodo
        /* setUserInput({
            ...userInput, // viene inserito per non perdere lo stato della Data e dell'Amount
            enteredAmount: event.target.value,
        }); */
    };

    const dateChangeHendler = (event) => {
        setEnteredDate(event.target.value);

        //secondo metodo
        /* setUserInput({
            ...userInput, // viene inserito per non perdere lo stato della Data e dell'Amount
            enteredDate: event.target.value,
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHendler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHendler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHendler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
