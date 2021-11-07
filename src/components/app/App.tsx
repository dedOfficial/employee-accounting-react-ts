import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';
import { Component } from 'react';

type TDataBooleans = 'isIncrease' | 'isChoosen';
export interface IData {
  id: string;
  name: string;
  salary: number | null;
  isIncrease: boolean;
  isChoosen: boolean;
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
          isChoosen: false,
        },
        {
          id: 'slhdsvsadsa',
          name: 'Alexey Berezin',
          salary: 1000,
          isIncrease: false,
          isChoosen: true,
        },
        {
          id: 'oiuhdsavbdd',
          name: 'Daniel Jackson',
          salary: 2550,
          isIncrease: false,
          isChoosen: false,
        },
      ],
    };

    this.removeEmployee = this.removeEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.setDataBooleanProps = this.setDataBooleanProps.bind(this);
    this.setChoosen = this.setChoosen.bind(this);
    this.setIncrease = this.setIncrease.bind(this);
    // this.toggleBoolProperty = this.toggleBoolProperty.bind(this);
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

  // toggleBoolProperty(obj: IData, propName: TDataBooleans) {
  //   return { ...obj, [propName]: !obj[propName] };
  // }

  setDataBooleanProps(propName: TDataBooleans, id: string) {
    this.setState(({ data }: AppState) => ({
      data: data.map((employee) => {
        if (employee.id === id) {
          return { ...employee, [propName]: !employee[propName] };
        }
        return employee;
      }),
    }));
  }

  setChoosen(id: string) {
    this.setDataBooleanProps('isChoosen', id);
  }
  setIncrease(id: string) {
    this.setDataBooleanProps('isIncrease', id);
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
          onIncrease={this.setIncrease}
          onChoose={this.setChoosen}
        />

        <EmployeeAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
