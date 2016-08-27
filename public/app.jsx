const GreeterMessage = (props) => {
  let name = props.name;
  let message = props.message;
  
  return (
    <div>
      <h1>Hello, {name}!!</h1>
      <p>{message}</p>
    </div>
  )
};

class GreeterForm extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    
    let updates = {};
    let name = this.refs.name.value;
    let message = this.refs.message.value;
    
    if(name) {
      this.refs.name.value = '';
      updates.name = name;
    }
    
    if(message) {
      this.refs.message.value = '';
      updates.message = message;
    }
    
    this.props.onNewUpdate(updates);
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input type="text" ref="name" placeholder="Enter Name"/>
        <textarea ref="message" placeholder="Enter message"></textarea>
        <button>Submit</button>
      </form>
    )
  } 
};

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      message: this.props.message
    }
  }
  
  handleNewUpdate(updates) {
    this.setState(updates);
  }
    
  render() {
    let name = this.state.name;
    let message = this.state.message;
    
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewUpdate={this.handleNewUpdate.bind(this)} />
      </div>
    )
  }
};

Greeter.propTypes = {
  name: React.PropTypes.string,
  message: React.PropTypes.string
};

Greeter.defaultProps = {
  name: 'React',
  message: 'This is the default message'
};

var firstName = 'Timothy';
var message = 'Hello from MacArthur';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
)
