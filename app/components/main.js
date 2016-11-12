import React from 'react';
import styles from '../styles/main.styl'
import CSSModules from '../lib/CSSModules'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false
    }
  }

  styleBtn() {
    return this.state.click ? 'btn-red' : 'btn-blue';
  }

  clickMe() {
    this.setState({click: !this.state.click})
  }

  render() {
    return <div styleName={this.styleBtn()} onClick={this.clickMe.bind(this)}> click </div>;
  }
}

export default CSSModules(Main, styles);
