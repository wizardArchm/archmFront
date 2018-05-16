import React from "react"
// import PropTypes from 'prop-types'
class DefaultComponent extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>DefaultComponent</div>
    );
  }
}

export default 'DefaultComponent'
