import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import TodosContextProvider from './store/todos-context';

import './App.css';

const App = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
