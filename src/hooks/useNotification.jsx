import {useCallback} from "react";
import {toast} from "react-toastify";

const useNotification = () => {
    const notify = useCallback((text = "", type = "") => {
        toast(text, {
            type,
            position: "top-right",
        });
    }, []);
    return {notify};
};

export default useNotification;
