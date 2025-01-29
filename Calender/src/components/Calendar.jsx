import React from 'react'

function Calendar() {
  return (
    <div>
      <div>
        <h1>Calendar</h1>
        <div>
            <h2>Month</h2>
            <h2>year</h2>
            <div>
                <i className='bx bx-chevron-left'></i>
                <i className='bx bx-chevron-right'></i>
            </div>
        </div>
        <div>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
        </div>
        <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
      </div>
      <div id='events'>
        <div id='event-popup'>
            <div id='time-input'>
                <div id='event-popUp'></div>
                <input type="number" id='hours'  min={0} max={24} />
                <input type="number" id='minutes' min={0} max={60} />
            </div>
            <textarea name="event-description" placeholder='Enter event here' id=""></textarea>
            <button>Add Event</button>
            <button>
                <i className='bx bx-x'></i>
            </button>
        </div>
        <div id='event'>
            <div id='event-date-wrapper'>
                <div id='event-date'>31-may</div>
                <div id='event-time'>00:00</div>
            </div>
            <div id='event-text'>Happy BirthDay</div>
            <div id='event-buttons'>
                <i className='bx bxs-edit-alt'></i>
                <i className='bx bxs-message-alt-x'></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
