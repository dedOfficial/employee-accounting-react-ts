import { ChangeEvent, Component, FormEvent } from 'react';
import { IData } from '../app/App';
import './EmployeeAddForm.css';

interface AddFormProp {
  onAddEmployee: (employeeData: IData) => void;
}
interface AddFormState {
  name: string;
  salary: number | null;
  validError: boolean;
}
class EmployeeAddForm extends Component<AddFormProp> {
  constructor(props: AddFormProp) {
    super(props);

    this.state = {
      name: '',
      salary: null,
      validError: false,
    };

    this.setEmployeeData = this.setEmployeeData.bind(this);
    this.serializeEmployeeData = this.serializeEmployeeData.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  setEmployeeData(e: ChangeEvent<HTMLInputElement>) {
    const t = e.target;

    this.setState({
      [t.name]: t.value,
    });
  }

  serializeEmployeeData() {
    const { name, salary } = this.state as AddFormState;
    return {
      name,
      salary,
      id: String(Math.random()),
      isIncrease: false,
      isChoosen: false,
    };
  }

  validateInput() {
    const { name, salary } = this.state as AddFormState;

    if (name.length >= 2 && salary && salary > 0) {
      return true;
    }

    return false;
  }

  addEmployee(e: FormEvent) {
    e.preventDefault();
    const isValid = this.validateInput();
    if (isValid) {
      const newEmployee = this.serializeEmployeeData();
      this.props.onAddEmployee(newEmployee);
      this.setState({
        name: '',
        salary: null,
        validError: false,
      });
    } else {
      this.setState({
        name: '',
        salary: null,
        validError: true,
      });
    }
  }

  render() {
    const { name, salary, validError } = this.state as AddFormState;

    const validatorMsg = validError ? (
      <small className="validator-error">Incorrect input</small>
    ) : null;

    return (
      <div className="app-add form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.addEmployee}>
          <div>
            <input
              type="text"
              className="form-control new-post-label"
              placeholder="Как его зовут?"
              name="name"
              value={name}
              onChange={this.setEmployeeData}
              // required
            />
            {validatorMsg}
          </div>
          <div>
            <input
              type="number"
              className="form-control new-post-label"
              placeholder="З/П в долларах?"
              name="salary"
              value={salary ? salary : ''}
              onChange={this.setEmployeeData}
              // required
            />
            {validatorMsg}
          </div>

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeAddForm;
