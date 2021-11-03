import {useContext, useState} from "react";
import {MainContext} from "../../../contexts/main/main-context";
import useNotification from "../../../hooks/useNotification";

const ConvertApiSetting = () => {
    const {changeConvertApiSecretKey} = useContext(MainContext);
    const {notify} = useNotification();
    const [show, setShow] = useState(false);
    const [secret, setSecret] = useState("");
    const handleChange = (e) => {
        setSecret(e.target.value);
    };
    const handleSetSecretKey = () =>{
        changeConvertApiSecretKey(secret);
        setShow(false);
        setSecret("");
        notify("your secret key received.\n go to tools and use convert api","success");
    }
    return (
        <div className="w-100 h-auto row p-2 m-0 bg-white rounded-3">
            <div className="col-12 p-0 m-0">
                <button
                    onClick={() => setShow((p) => !p)}
                    className="btn btn-dark center w-100">
                    Set Secret key
                </button>
            </div>
            {show && (
                <div className="col-12 p-0 m-0 mt-2">
                    <div className="w-100 h-auto row p-0 m-0">
                        <div className="col-8 p-0 m-0">
                            <div className="p-1 center rounded-2 h-100 bg-white border-solid border-dark border-2 w-100">
                                <input
                                    value={secret}
                                    onChange={handleChange}
                                    className="outline-none h-100 bg-transparent border-none w-100"
                                />
                            </div>
                        </div>
                        <div className="col-4 h-100 center p-0 m-0">
                            <button
                                onClick={handleSetSecretKey}
                                className="btn btn-info w-100">
                                Set
                            </button>
                        </div>
                        <div className="col-12 p-0 m-0">
                            <p className="w-100 p-2">
                                please create an account at
                                <a
                                    href="https://www.convertapi.com/"
                                    className="mx-2 text-info text-decoration-none">
                                    Convert Api
                                </a>
                                and in your dashboard, copy your secret key and paste it here.<br/>
                                we save it for you
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConvertApiSetting;
