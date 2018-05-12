import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar'
import CalendaNav from './components/calendar-nav'
import { BrowserRouter, Route } from 'react-router-dom'
import SignUpPage from './components/SignUpPage';

import FlashMessagesList from './components/flash/FlashMessagesList'

class App extends Component {

  componentDidUpdate(){
  }

  constructor(props){
    super(props);
      const now = new Date();
      console.log(this.props)

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
        <BrowserRouter>
            <div className="App">
                <CalendaNav/>
                <FlashMessagesList/>
                <Route path="/calendar/:year/:month" component={Calendar}/>
                <Route path="/signup" component={SignUpPage}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
