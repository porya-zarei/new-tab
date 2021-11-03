import {useContext} from "react";
import { ToastContainer } from "react-toastify";
import {MainContext} from "../contexts/main/main-context";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Layout = ({children}) => {
    const {backGroundImage} = useContext(MainContext);

    return (
        <div
            className="ext-fontfamily ext-custom-scrollbar"
            style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${backGroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                overflowY: "auto",
            }}>
            <Header />
            <ToastContainer theme="colored" />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Layout;
