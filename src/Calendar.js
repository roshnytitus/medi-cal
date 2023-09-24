import month from './monthly-calendar.png';

const Calendar = () => {
    return (
        // <div className="calendar">
        //     <h2>Calendar</h2>
        // </div>
        <section className="calendar">
            <img src={month} alt="Monthly Calendar" />
        </section>
    );
}

export default Calendar;