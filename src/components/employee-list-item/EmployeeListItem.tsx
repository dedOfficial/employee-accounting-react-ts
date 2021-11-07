import { Component } from 'react';
import { IData } from '../app/App';
import './EmployeeListItem.css';

type EmployeeProp = Omit<IData, 'id'>;

interface EmployeeState {
  isIncrease: boolean;
  isChoosen: boolean;
}

class EmployeeListItem extends Component {
  constructor(props: EmployeeProp) {
    super(props);

    this.state = {
      isIncrease: false,
    };

    this.setIncrease = this.setIncrease.bind(this);
    this.setChoosen = this.setChoosen.bind(this);
  }

  setIncrease() {
    this.setState(({ isIncrease }: EmployeeState) => ({
      isIncrease: !isIncrease,
    }));
  }

  setChoosen() {
    this.setState(({ isChoosen }: EmployeeState) => ({
      isChoosen: !isChoosen,
    }));
  }

  render() {
    const { name, salary } = this.props as EmployeeProp;
    const { isIncrease, isChoosen } = this.state as EmployeeState;

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
        <span className="list-group-item-label" onClick={this.setChoosen}>
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
            onClick={this.setIncrease}
          >
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
}

export default EmployeeListItem;
