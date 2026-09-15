
import './App.css';
import React,{useState} from 'react';
import DatePicker from'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function App() {
  const [selectedDate,setSelectedDate]=useState(null)
  return (
    <div className="App">
      <DatePicker selected={selectedDate}
       onChange={date=>setSelectedDate(date)}
      dateFormat={'yyyy/MM/dd'} 
      filterDate={date=>date.getDay()!==6 && date.getDay!==0}
      isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      />
    </div>
  );
}
// minDate={new Date()}
//maxDate={new Date()}
export default App;

