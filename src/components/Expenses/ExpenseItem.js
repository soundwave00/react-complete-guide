import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);  //il primo è il valore non ancora modificato, il secondo è quello modificato
    console.log('EcpenseItem evalueted by react');

    const clickHendler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}€</div>
            </div>
            <button onClick={clickHendler}>Change title</button>
        </Card>
    );
};

export default ExpenseItem;
