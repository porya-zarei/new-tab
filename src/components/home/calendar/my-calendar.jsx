import { useContext } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import { MainContext } from "../../../contexts/main/main-context";

const MyCalendar = () => {
    const {calendarSelectedDay,setCalendarSelectedDay} = useContext(MainContext);
    return (
        <div className="row p-0 m-0 justify-content-end align-items-center">
            <div className="col-12 h-auto w-auto">
                <Calendar
                    value={calendarSelectedDay}
                    onChange={setCalendarSelectedDay}
                    shouldHighlightWeekends
                    locale="fa"
                    calendarClassName=""
                />
            </div>
        </div>
    );
}
 
export default MyCalendar;