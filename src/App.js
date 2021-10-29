import {BrowserRouter,Switch,Route} from "react-router-dom";
import HomePage from "./components/home/home";
import SwitchRouter from "./components/switch-router/switch-router";
import MainContextProvider from "./contexts/main/main-context";
import Layout from "./layout/layout";

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainContextProvider>
                    <Layout>
                        <SwitchRouter/>
                    </Layout>
                </MainContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
