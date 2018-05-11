import React, { Component } from 'react';
import '../App.css';
import CalendarHeader from './calendar-header'
import CalendarPicker from './calendar-picker'
import CalendarNav from './calendar-nav'


class Calendar extends Component {

    componentDidUpdate(){
    }

    constructor(props){
        super(props);
        const now = new Date();
        const newDate = new Date();
        const paramMonth = (0 < this.props.match.params.month && this.props.match.params.month<13 ) ? (this.props.match.params.month) :(now.getMonth()+1)  ;
        const paramYear = (0 < this.props.match.params.year && this.props.match.params.year<10000 ) ? (this.props.match.params.year) :(now.getFullYear()) ;
        const firstDate = new Date(paramYear, paramMonth-1, 1)
        firstDate.setFullYear(paramYear);
        console.log(firstDate)
        const lastDate = new Date(paramYear, paramMonth, 0)
        lastDate.setFullYear(paramYear);
        console.log(lastDate)

        this.state = {
            todayDate: now,
            currentDate: now,
            daysTotal: lastDate.getDate(),
            currentMonth: paramMonth,
            currentYear: paramYear,
            currentFirstDay: firstDate.getDay()
        }
        console.log(this.state)
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
                <CalendarHeader currentDate={this.state.currentDate} onMonthChange={this.onMonthChange}/>
                <CalendarPicker datePickerData={this.state}/>
            </div>
        );
    }
}

export default Calendar;
