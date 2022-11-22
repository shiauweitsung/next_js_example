import type { NextPage } from "next";
import { setLoadState, selectLoadingState } from "../../store/loading";
import { useDispatch, useSelector } from "react-redux";

const Store: NextPage = () => {
    const loadingState = useSelector(selectLoadingState);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{loadingState ? "Logged in" : "Not Logged In"}</div>
            <button
                onClick={() =>
                    loadingState
                        ? dispatch(setLoadState(false))
                        : dispatch(setLoadState(true))
                }
            >
                {loadingState ? "Logout" : "LogIn"}
            </button>
        </div>
    );
};

export default Store;