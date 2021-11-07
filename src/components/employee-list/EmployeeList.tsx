import './EmployeeList.css';

import EmployeeListItem from '../employee-list-item/EmployeeListItem';

import { IData } from '../app/App';
interface EmployeeListProp {
  employeeList: IData[];
  onRemoveEmployee: (id: string) => void;
}

function EmployeeList({ employeeList, onRemoveEmployee }: EmployeeListProp) {
  const mappedEmployeeList = employeeList.map(({ id, ...employeeProps }) => (
    <EmployeeListItem
      {...employeeProps}
      onRemoveEmployee={() => onRemoveEmployee(id)}
      key={id}
    />
  ));

  return <ul className="app-list list-group">{mappedEmployeeList}</ul>;
}

export default EmployeeList;
