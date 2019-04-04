import React, { Component } from "react";
import { getListAction, getListActionH } from "./actions";

import { connect } from "react-redux";

class MainpageContainer extends Component {
  getList() {
    fetch("https://reqres.in/api/unknown").then(function(response)  {
        return response.json()
    }).then(resp => {
        console.log('resp', resp)
        this.props.getListAction(resp);
      })
  }
  getListWithHeader() {
      console.log('get list with header')
      this.props.getListActionH();
  }
  render() {
    console.log('main page render props', this.props)
    return (
      <div>
        <h1>Mainpage is here</h1>
        <button onClick={() => this.getList()}>Get list</button>
        <br/>
        <button onClick={() => this.getListWithHeader()}>Get list with header</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    main: state.mainReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListAction: (resp) => dispatch(getListAction(resp)),
    getListActionH: () => dispatch(getListActionH())
  };
};
export const Mainpage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainpageContainer);
