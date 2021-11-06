import './EmployeeList.css';

import EmployeeListItem from '../employee-list-item/EmployeeListItem';

function EmployeeList() {
  return (
    <ul className="app-list list-group">
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </ul>
  );
}

export default EmployeeList;
