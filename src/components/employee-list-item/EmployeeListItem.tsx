import { ChangeEvent, Component, MouseEventHandler } from 'react';
import { IData } from '../app/App';
import './EmployeeListItem.css';

interface EmployeeProp extends Omit<IData, 'id'> {
  onRemoveEmployee: MouseEventHandler<HTMLButtonElement>;
  onIncrease: MouseEventHandler<HTMLButtonElement>;
  onChoose: MouseEventHandler<HTMLSpanElement>;
  onUpdate: (changedProp: keyof IData, newValue: any) => void;
}

interface EmployeeState {
  changedSalary: string;
}
class EmployeeListItem extends Component<EmployeeProp> {
  constructor(props: EmployeeProp) {
    super(props);
    this.state = {
      changedSalary: props.salary + '$',
    };

    this.setChangedSalary = this.setChangedSalary.bind(this);
  }

  setChangedSalary(e: ChangeEvent<HTMLInputElement>) {
    let val = e.currentTarget.value;

    if (val.indexOf('$') === -1) {
      val += '$';
    } else if (val.indexOf('$') !== val.length - 1) {
      val = val.split('$').join('') + '$';
    }

    this.setState({ changedSalary: val });

    this.props.onUpdate('salary', parseFloat(val));
  }

  render() {
    const {
      name,
      onRemoveEmployee,
      onIncrease,
      onChoose,
      isIncrease,
      isChoosen,
    } = this.props as EmployeeProp;
    const { changedSalary } = this.state as EmployeeState;

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
          value={changedSalary}
          onChange={this.setChangedSalary}
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
