import React from 'react';

class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 111,
            arr: [1,2,3],
        }
        
    }
  render() {
    return (
      <div>
        <p>{this.state.a}</p>
        <p>{this.state.arr[0]}</p>
      </div>
    );
  }
}
export default Test2;