import './employers-list-item.css';
import {Component} from 'react';

class EmployersListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      increase: false,
      star: false,
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }

  selectUser = () => {
    this.setState(({star}) => ({
      star: !star
    }))
  }

  
 render(){
  const {name, salary, onDelete} = this.props;
  const {increase, star} = this.state;

  let classNames = "list-group-item d-flex justify-content-between"
  if(increase){
    classNames += " increase"
  }
  if(star){
    classNames += " like"
  }
  return (
    <li className={classNames}>
      <span onClick={this.selectUser} className="list-group-item-label ">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align3-items-center">
        <button onClick={this.onIncrease} type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
 }
};

export default EmployersListItem;
