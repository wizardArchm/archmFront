import React from "react"
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import * as GlobalReducerAction from '../../redux/action/GlobalReducerAction/GlobalReducerAction'

class HomeContainer extends React.Component {
    static propTypes = {
        queryRestApi: PropTypes.func.isRequired,
        res: PropTypes.string.isRequired
    }
    static defaultProps = {}
    handleOnClick = () => {
        console.log(`click`)
        this.props.queryRestApi()
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={this.handleOnClick}>
                <div>HomeContainer</div>
                <span>{this.props.res}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    res: state.GlobalReducer.res
})
const mapDispatchToProps = (dispatch) => ({
    queryRestApi: () => {
        dispatch(GlobalReducerAction.query_restful_api())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
