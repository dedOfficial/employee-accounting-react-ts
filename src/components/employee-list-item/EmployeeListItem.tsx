import { IData } from '../app/App';
import './EmployeeListItem.css';

type EmployeeProp = Omit<IData, 'id'>;

function EmployeeListItem({ name, salary = 1000, isIncrease }: EmployeeProp) {
  const increaseClass = isIncrease ? ' increase' : '';

  return (
    <li
      className={
        'list-group-item d-flex justify-content-between' + increaseClass
      }
    >
      <span className="list-group-item-label">{name}</span>

      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeeListItem;
