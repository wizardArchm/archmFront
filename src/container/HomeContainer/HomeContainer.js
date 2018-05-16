import React from "react"
// import PropTypes from 'prop-types'
import {connect} from "react-redux"

class HomeContainer extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>HomeContainer</div>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
