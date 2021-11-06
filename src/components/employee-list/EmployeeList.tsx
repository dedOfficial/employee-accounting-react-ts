import './EmployeeList.css';

import EmployeeListItem from '../employee-list-item/EmployeeListItem';

import { IData } from '../app/App';
interface EmployeeListProp {
  employeeList: IData[];
}

function EmployeeList({ employeeList }: EmployeeListProp) {
  const mappedEmployeeList = employeeList.map(({ id, ...employeeProps }) => (
    <EmployeeListItem {...employeeProps} key={id} />
  ));

  return <ul className="app-list list-group">{mappedEmployeeList}</ul>;
}

export default EmployeeList;
