import "./ExpenseDate.css";

function ExpenseDate(props) {
    const mouth = props.date.toLocaleString("it-IT", { month: "long" });
    const day = props.date.toLocaleString("it-IT", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{mouth}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
