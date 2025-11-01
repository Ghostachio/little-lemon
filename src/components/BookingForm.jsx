import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                name="date"
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                name="time"
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.map((available) => {
                  return <option key={available}>Available</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="guests">Number Of Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
              />
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <input
                type="text"
                name="occasion"
                id="occasion"
                onChange={(e) => setOccasion(e.target.value)}
                value={occasion}
              />
            </div>
            <div className="btnReceive">
              <input aria-label="on click" type="submit" value="Make your Reservation" />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
