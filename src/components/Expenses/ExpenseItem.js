import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const clickHendler = () => {
        console.log('Clicked!!!!');
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}€</div>
            </div>
            <button onClick={clickHendler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
