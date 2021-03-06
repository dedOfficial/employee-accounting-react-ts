import './App.css';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';
import { Component } from 'react';

type TDataBooleans = 'isIncrease' | 'isChoosen';
export type filterByType = 'all' | 'increased' | 'big-salary';
export interface IData {
  id: string;
  name: string;
  salary: number | null;
  isIncrease: boolean;
  isChoosen: boolean;
}

interface AppState {
  data: IData[];
  query: string;
  filterBy: filterByType;
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
      query: '',
      filterBy: 'all',
    };

    this.removeEmployee = this.removeEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.setDataBooleanProps = this.setDataBooleanProps.bind(this);
    this.setChoosen = this.setChoosen.bind(this);
    this.setIncrease = this.setIncrease.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.searchFilterData = this.searchFilterData.bind(this);
    this.categoryFilterData = this.categoryFilterData.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
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

  updateEmployee(id: string, changedProp: keyof IData, newValue: any) {
    this.setState(({ data }: AppState) => {
      const updatedData = data.map((employee) => {
        if (employee.id === id) {
          return {
            ...employee,
            [changedProp]: newValue,
          };
        }
        return employee;
      });

      return { data: updatedData };
    });
  }

  protected setDataBooleanProps(propName: TDataBooleans, id: string) {
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

  searchFilterData(data: IData[], query: string) {
    if (!query.length) {
      return data;
    }

    const lowercasedQuery = query.toLowerCase();

    return data.filter((employee) => {
      const lowercasedName = employee.name.toLowerCase();

      return lowercasedName.indexOf(lowercasedQuery) > -1;
    });
  }

  categoryFilterData(data: IData[], filterBy: filterByType) {
    switch (filterBy) {
      case 'increased':
        return data.filter((employee) => employee.isIncrease);
      case 'big-salary':
        return data.filter(
          (employee) => employee.salary && employee.salary > 1000
        );
      default:
        return data;
    }
  }

  setQuery(query: string) {
    this.setState({ query });
  }

  setFilter(filterBy: filterByType) {
    this.setState({ filterBy });
  }

  render() {
    const { data, filterBy, query } = this.state as AppState;
    const increasedCount = data.filter(
      (employee) => employee.isIncrease
    ).length;
    const choosenCount = data.filter((employee) => employee.isChoosen).length;

    const filteredData = this.categoryFilterData(
      this.searchFilterData(data, query),
      filterBy
    );

    return (
      <div className="App">
        <AppInfo
          employeesCount={data.length}
          increasedCount={increasedCount}
          choosenCount={choosenCount}
        />

        <div className="search-panel">
          <SearchPanel onSearch={this.setQuery} />
          <AppFilter onChangeCategory={this.setFilter} filter={filterBy} />
        </div>

        <EmployeeList
          employeeList={filteredData}
          onRemoveEmployee={this.removeEmployee}
          onIncrease={this.setIncrease}
          onChoose={this.setChoosen}
          onUpdate={this.updateEmployee}
        />

        <EmployeeAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
