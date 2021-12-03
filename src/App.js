import {MemoryRouter} from "react-router-dom";
import SwitchRouter from "./components/switch-router/switch-router";
import MainContextProvider from "./contexts/main/main-context";
import Layout from "./layout/layout";

function App() {
    return (
        <div>
            <MainContextProvider>
                <MemoryRouter>
                    <Layout>
                        <SwitchRouter />
                    </Layout>
                </MemoryRouter>
            </MainContextProvider>
        </div>
    );
}

export default App;
