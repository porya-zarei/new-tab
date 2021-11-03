import {BrowserRouter} from "react-router-dom";
import SwitchRouter from "./components/switch-router/switch-router";
import MainContextProvider from "./contexts/main/main-context";
import Layout from "./layout/layout";

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainContextProvider>
                    <Layout>
                        <SwitchRouter />
                    </Layout>
                </MainContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
