import { ChangeEvent, Component, FormEvent } from 'react';
import { IData } from '../app/App';
import './EmployeeAddForm.css';

interface AddFormProp {
  onAddEmployee: (employeeData: IData) => void;
}
interface AddFormState {
  name: string;
  salary: number | null;
}
class EmployeeAddForm extends Component<AddFormProp> {
  constructor(props: AddFormProp) {
    super(props);

    this.state = {
      name: '',
      salary: null,
    };

    this.setEmployeeData = this.setEmployeeData.bind(this);
    this.serializeEmployeeData = this.serializeEmployeeData.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
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

  addEmployee(e: FormEvent) {
    e.preventDefault();
    const newEmployee = this.serializeEmployeeData();
    this.props.onAddEmployee(newEmployee);
    this.setState({
      name: '',
      salary: null,
    });
  }

  render() {
    const { name, salary } = this.state as AddFormState;

    return (
      <div className="app-add form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.addEmployee}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.setEmployeeData}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в долларах?"
            name="salary"
            value={salary ? salary : ''}
            onChange={this.setEmployeeData}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeAddForm;
