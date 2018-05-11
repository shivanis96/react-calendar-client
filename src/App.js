import React, { Component } from 'react';
import './App.css';
import CalendarHeader from './components/calendar-header'
import CalendarPicker from './components/calendar-picker'
import CalendarNav from './components/calendar-nav'

class App extends Component {

  componentDidUpdate(){
  }

  constructor(props){
    super(props);
      const now = new Date();

      this.state = {
        todayDate: now,
        currentDate: now,
        daysTotal: new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(),
        currentMonth: now.getMonth(),
        currentYear: now.getFullYear(),
        currentFirstDay: new Date(now.getFullYear(),now.getMonth(),1).getDay()
    }
    this.daysInMonth = this.daysInMonth.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this)
  }

  daysInMonth (month, year) {
      this.setState({
          daysTotal: new Date(year, month+1, 0).getDate(),
          currentFirstDay: new Date(year,month,1).getDay()
  })
  }

  onMonthChange(date) {
      this.setState({currentMonth:date.currentMonth, currentYear:date.currentYear}, ()=>this.daysInMonth(date.currentMonth, date.currentYear))
  }



  render() {
    return (
      <div className="App">
          <CalendarNav/>
          <CalendarHeader currentDate={this.state.currentDate} onMonthChange={this.onMonthChange}/>
          <CalendarPicker datePickerData={this.state}/>
      </div>
    );
  }
}

export default App;
