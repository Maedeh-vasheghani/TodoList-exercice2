import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Title extends Component {

  render() {
      return (
      <div className='bg-success bg-gradient'>
          <h1 className='text-center py-5 text-light'> Welcome To My Todo List {'⌚'.repeat(this.props.time)}</h1>
      </div>)
  }
}
export default Title;
