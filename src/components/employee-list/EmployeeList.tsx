import './EmployeeList.css';

import EmployeeListItem, {
  EmployeeProp,
} from '../employee-list-item/EmployeeListItem';

interface EmployeeListProp {
  employeeList: EmployeeProp[];
}

function EmployeeList({ employeeList }: EmployeeListProp) {
  const mappedEmployeeList = employeeList.map((employee, i) => (
    <EmployeeListItem {...employee} key={i} />
  ));

  return <ul className="app-list list-group">{mappedEmployeeList}</ul>;
}

export default EmployeeList;
