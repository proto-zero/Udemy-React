import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {
    // method 1 - multiple states in slices
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // method 2 - one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    function titleChangeHandler(event) {
        // method 1 - multiple states in slices with useState
        setEnteredTitle(event.target.value);

        // method 2 - one state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // method 3 - one state dependent on prevState
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    function amountChangeHandler(event) {
        // method 1 - multiple states in slices with useState
        setEnteredAmount(event.target.value);

        // method 2 - one state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        // method 3 - one state dependent on prevState
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }

    function dateChangeHandler(event) {
        // method 1 - multiple states in slices with useState
        setEnteredDate(event.target.value);

        // method 2 - one state
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })

        // method 3 - one state dependent on prevState
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    function submitHandler(event) {
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
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;