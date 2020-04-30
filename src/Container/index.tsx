import { connect } from "react-redux";

import { addRequest as addRequestAction } from "../actions";
import { State } from "../reducers";
import RequestsComponent from './RequestsComponent'

const mapStateToProps = (state: State) => ({
    list: state.requestsReducer.list,
});


const mapDispatchToProps = (dispatch: any) => ({
    addRequest: (request: any): any => {
        dispatch(addRequestAction(request))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestsComponent);
