import { Component, MouseEventHandler } from 'react';
import { IData } from '../app/App';
import './EmployeeListItem.css';

interface EmployeeProp extends Omit<IData, 'id'> {
  onRemoveEmployee: MouseEventHandler<HTMLButtonElement>;
  onIncrease: MouseEventHandler<HTMLButtonElement>;
  onChoose: MouseEventHandler<HTMLSpanElement>;
}

class EmployeeListItem extends Component<EmployeeProp> {
  render() {
    const {
      name,
      salary,
      onRemoveEmployee,
      onIncrease,
      onChoose,
      isIncrease,
      isChoosen,
    } = this.props as EmployeeProp;
    // const { isIncrease, isChoosen } = this.state as EmployeeState;

    const increaseClass = isIncrease ? ' increase' : '';
    const choosenClass = isChoosen ? ' like' : '';

    return (
      <li
        className={
          'list-group-item d-flex justify-content-between' +
          increaseClass +
          choosenClass
        }
      >
        <span className="list-group-item-label" onClick={onChoose}>
          {name}
        </span>

        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button className="btn-trash btn-sm" onClick={onRemoveEmployee}>
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeeListItem;
