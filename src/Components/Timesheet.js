import React, {useState} from 'react'
import '../assets/CSS/Timesheet.css'

function Timesheet() {

  const [empid, setEmpId] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) =>{
    e.preventDefault();
    const newEntry = {empid:empid, date:date, duration:duration };
    setAllEntry([...allEntry, newEntry]); 
  }

    return (
      <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="empid">EmpID</label> <br/> 
          <input type="text" name="empid" id="empid" autoComplete="off" value={empid}
            onChange={(e) => setEmpId(e.target.value)} /> <br/><br/> <br/>
        </div>

        <div>
          <label htmlFor="date">Date</label> <br/> 
          <input type="date" name="date" id="date" autoComplete="off" value={date}
            onChange={(e) => setDate(e.target.value)}
          /> <br/><br/>  <br/>
        </div>

        <div>
          <label htmlFor="duration">Duration</label> <br/> 
          <input type="text" name="duration" id="duration" autoComplete="off" value={duration}
            onChange={(e) => setDuration(e.target.value)}
          /> <br/><br/> 
        </div><br/><br/> <br/>
        <div>
        <button type="submit"> Submit </button>
        </div>
      </form>

      <div>
        {
          allEntry.map( (currElem) => {
              return (
                <div className="show-details">
                  <p>{currElem.empid}</p>
                  <p>{currElem.date}</p>
                  <p>{currElem.duration}</p>

                </div>
                )
              })
        }
      </div>



      </>
            
        

)
}

export default Timesheet
