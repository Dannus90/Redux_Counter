import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index.js";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl label="Add 5" clicked={this.props.onAddFive} />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubstractFive}
                />
                <hr />
                <button
                    onClick={() => this.props.onStoreResult(this.props.ctr)}
                >
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map((strResult) => (
                        <li
                            key={strResult.id}
                            onClick={() =>
                                this.props.onDeleteResult(strResult.id)
                            }
                        >
                            {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddFive: () => dispatch(actionCreators.add(5)),
        onSubstractFive: () => dispatch(actionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
