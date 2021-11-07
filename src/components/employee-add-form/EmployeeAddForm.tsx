import { ChangeEvent, Component } from 'react';
import './EmployeeAddForm.css';

interface AddFormProp {}
interface AddFormState {
  name: string;
  salary: number | null;
}
class EmployeeAddForm extends Component {
  constructor(props: AddFormProp) {
    super(props);

    this.state = {
      name: '',
      salary: null,
    };

    this.setFormData = this.setFormData.bind(this);
  }

  setFormData(e: ChangeEvent<HTMLInputElement>) {
    const t = e.target;

    this.setState({
      [t.name]: t.value,
    });
  }

  render() {
    const { name, salary } = this.state as AddFormState;

    return (
      <div className="app-add form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.setFormData}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в долларах?"
            name="salary"
            value={salary ? salary : ''}
            onChange={this.setFormData}
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
