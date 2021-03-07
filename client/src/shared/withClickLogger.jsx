import React from 'react';
import axios from 'axios';

// this function takes in a component (one of our module-level components)
// it returns a component that has a light wrapper around it
// the props are passed through to the wrapped component
// clicks are logged without having to edit the modules themselves
const withClickLogger = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {

    constructor(props) {
      super(props);
      // store a reference to the name of the wrapped component
      this.moduleName = WrappedComponent.name;
    }

    handleClick(e) {
      const name = this.moduleName;
      // change request specifies need for element clicked, time of click, and widget it was in
      const clickData = {
        element: e.target.tagName.toLowerCase(),
        time: new Date().toISOString(),
        widget: name
      };
      const destinationUrl = '/api/interactions';
      axios({
        method: 'post',
        url: destinationUrl,
        data: clickData
      }).catch((error) => {
        console.log('error posting click data', error);
      });
    }

    render() {
      return (
        <div onClick={(e)=> { this.handleClick(e); } } >
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
};

export default withClickLogger;
