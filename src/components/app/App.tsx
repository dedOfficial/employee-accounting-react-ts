import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';

export interface IData {
  id: string | number;
  name: string;
  salary: number;
  isIncrease: boolean;
}

function App() {
  const data: IData[] = [
    {
      id: 'sdfsasajhds',
      name: 'Konstantin Karpov',
      salary: 800,
      isIncrease: true,
    },
    {
      id: 'slhdsvsadsa',
      name: 'Alexey Berezin',
      salary: 1000,
      isIncrease: false,
    },
    {
      id: 'oiuhdsavbdd',
      name: 'Daniel Jackson',
      salary: 2550,
      isIncrease: false,
    },
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
