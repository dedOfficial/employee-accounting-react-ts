import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';

function App() {
  const data = [
    { name: 'Konstantin Karpov', salary: 800, isIncrease: true },
    { name: 'Alexey Berezin', salary: 1000, isIncrease: false },
    { name: 'Daniel Jackson', salary: 2550, isIncrease: false },
  ];

  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeeList employeeList={data} />

      <EmployeeAddForm />
    </div>
  );
}

export default App;
