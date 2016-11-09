import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
    //read and confirmed are always going to be true or false. false by default.

    //checkbox is always going to be unchecked to start out
    getInitialState() {
        return {
            read     : false,
            confirmed: false
        };
    },
    render() {
      if(this.state.read === false && this.state.confirmed === false) {
        return (
                <div>
                <p>{this.props.store.documents.body}
                </p>
                <div id = "checkbox">
                <span> Mark as Read </span>
                <input type = "checkbox"
                onClick = {this.handleCheck} />
                </div>
                </div>
            )
          } else if (this.state.read === true && this.state.confirmed === false) {
            return (
              <div id="background">
                <div id="modal">
                  <h2>Mark as read?</h2>
                  <button onClick={this.handleConfirm} id="confirm">Confirm</button>
                  <button onClick={this.handleCancel} id="cancel">Cancel</button>
                </div>
                <p>{this.props.store.documents.body}
                </p>
                <div id = "checkbox">
                <span> Mark as Read </span>
                <input type = "checkbox"
                onClick = {this.handleCheck} checked="true" />
                </div>
                </div>
            );
          } else if (this.state.read === true && this.state.confirmed === true) {
            return (
              <div>
              <p>{this.props.store.documents.body}
              </p>
              <div id = "checkbox">
              <span> Mark as Read </span>
              <input type = "checkbox"
              onClick = {this.handleCheck} checked="true" disabled="true" />
              </div>
              </div>
            );
          }
    },
    handleCheck() {
      this.setState({
       read     : true,
       confirmed: false
      });

    },
    handleConfirm() {
      this.setState({
        read     : true,
        confirmed: true
      });
    },

    handleCancel() {
      this.setState({
      read     : false,
      confirmed: false
    })
  }
});
