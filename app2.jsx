import React from 'react';
class App extends React.Component {
constructor (props)  {
  super(props) ;
  this.state = {
  header :  "This is the header ",
  content  :  "This is the content ",
  footer :  "This is the footer ",
  }
  }
  render () {
  return {
  <div> 
  <div> 
  <h1> this.state.header </h1>
  
  </div>
  </div>
  );
  }
  }
  export default App;
