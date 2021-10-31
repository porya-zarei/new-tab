import {useContext, useEffect} from "react";
import {fetcher} from "../axios/http";
import {MainContext} from "../contexts/main/main-context";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Layout = ({children}) => {
    const {backGroundImage} = useContext(MainContext);

    return (
        <div
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
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Layout;
