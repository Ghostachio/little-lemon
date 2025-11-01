import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import { useReducer } from "react";
import Header from "./Header";
import ConfirmBooking from "./ConfirmBooking";

const random = (data) => {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = data % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = (date) => {
  let result = [];
  let randomSeed = random(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (randomSeed() < 0.5) result.push(i + ":00");
    if (randomSeed() > 0.5) result.push(i + ":30");
  }
  return result;
};

const updateTimes = (state, date) => {
  return { availableTimes: fetchAPI(new Date()) };
};

const initialState = { availableTimes: fetchAPI(new Date()) };

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  const submitAPI = (formData) => {
    return true;
  };
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes} // pass only the array
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
