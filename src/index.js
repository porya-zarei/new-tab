import {StrictMode} from "react";
import {render} from "react-dom";
import App from "./App";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root"),
);
