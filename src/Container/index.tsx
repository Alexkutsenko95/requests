import { connect } from "react-redux";

import { addRequest as addRequestAction, removeRequest as removeRequestAction} from "../actions";
import { State } from "../reducers";
import RequestsComponent from './RequestsComponent'

const mapStateToProps = (state: State) => ({
    list: state.requestsReducer.list,
});

const mapDispatchToProps = (dispatch: any) => ({
    addRequest: (request: any): void => {
        dispatch(addRequestAction(request))
    },
    removeRequest: (id: number): void => {
        dispatch(removeRequestAction(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestsComponent);
