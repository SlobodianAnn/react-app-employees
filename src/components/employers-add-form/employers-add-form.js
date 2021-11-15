import './employers-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      salary:  ''
    }
  }
  onValueChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  render () {
    const {name, salary} = this.state;
    const {onAdd} = this.props;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={ (e) => onAdd(name, salary, e)}  className="add-form d-flex">
          <input
            name="name"
            onChange={this.onValueChange}
            value={name}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
           onChange={this.onValueChange}
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />
  
          <button type="submit"  className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }


};

export default EmployeesAddForm;
