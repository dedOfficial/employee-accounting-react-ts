import './EmployeeList.css';

import EmployeeListItem from '../employee-list-item/EmployeeListItem';

import { IData } from '../app/App';
interface EmployeeListProp {
  employeeList: IData[];
  onRemoveEmployee: (id: string) => void;
  onIncrease: (id: string) => void;
  onChoose: (id: string) => void;
}

function EmployeeList({
  employeeList,
  onRemoveEmployee,
  onIncrease,
  onChoose,
}: EmployeeListProp) {
  const mappedEmployeeList = employeeList.map(({ id, ...employeeProps }) => (
    <EmployeeListItem
      {...employeeProps}
      onRemoveEmployee={() => onRemoveEmployee(id)}
      onChoose={() => onChoose(id)}
      onIncrease={() => onIncrease(id)}
      key={id}
    />
  ));

  return <ul className="app-list list-group">{mappedEmployeeList}</ul>;
}

export default EmployeeList;
