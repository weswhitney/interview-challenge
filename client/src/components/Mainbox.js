import React, { Component } from 'react';
import Client from './Client';
import HourlyReportTable from './HourlyReportTable';
import MenuAppBar from './MenuAppBar';

class Mainbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Client.fetchRows((apiData) => {
      this.setState({
        data: apiData.rows,
      });
    });
  }

  render() {
    return (
      <div>
        <MenuAppBar/>
        <HourlyReportTable data={this.state.data} />
      </div>
    );
  }
}

export default Mainbox;
