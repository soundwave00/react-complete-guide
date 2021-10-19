import ExpenseItem from "./components/ExpenseItem";

function App() {
/*Così è come viene fatto su javascript    
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para); */
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
