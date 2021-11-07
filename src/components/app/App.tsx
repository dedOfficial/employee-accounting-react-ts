import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';
import { Component } from 'react';

export interface IData {
  id: string;
  name: string;
  salary: number | null;
  isIncrease: boolean;
}

interface AppState {
  data: IData[];
}

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
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
      ],
    };

    this.removeEmployee = this.removeEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
  }

  removeEmployee(id: string) {
    this.setState(({ data }: AppState) => ({
      data: data.filter((employee) => employee.id !== id),
    }));
  }

  addEmployee(employeeData: IData) {
    this.setState(({ data }: AppState) => ({
      data: [...data, employeeData],
    }));
  }

  render() {
    const { data } = this.state as AppState;

    return (
      <div className="App">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeeList
          employeeList={data}
          onRemoveEmployee={this.removeEmployee}
        />

        <EmployeeAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
