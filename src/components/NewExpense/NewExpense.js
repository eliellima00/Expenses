import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  //This function will be passed to child element 'ExpenseForm' and him will execute on the submit Event
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //This prop was created in parent element 'App'. Am I returning the expense Data for the parent
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  //Open add form
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //Close add form
  const closeEditingHandler = () => {
    setIsEditing(false);
  };

  let content = <button onClick={startEditingHandler}>Add New Expense</button>
  if (isEditing) {
    content  = <ExpenseForm onCloseEdit={closeEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
        {content}
    </div>
  );
}
