this.setState({ posts:[ ] });


onError(message) {
  this.setState({
    error: message
  });
}


for(1~10) {
  this.setState((prevState) => {
    return {
      count: prevState.count + 1;
    }
  });
}


// app pass props(onPost:function) to header;
import React, {Component, Fragment} from 'react';
<Fragment> </Fragment>



<input nvalue={this.state.content} onChange={(event) => this.setState({content: event.target.value})}