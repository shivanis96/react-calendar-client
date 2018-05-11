import React, { Component } from 'react';
import '../App.css';
import CalendarHeader from './calendar-header'
import CalendarPicker from './calendar-picker'
import CalendarNav from './calendar-nav'


class Calendar extends Component {


    static getDerivedStateFromProps(nextProps, prevState){

        const now = new Date();
        if(nextProps.match.params.month ===prevState.currentMonth && nextProps.match.params.year ===prevState.currentYear){
            return null;
        }
        const paramMonthUpdate = (0 < nextProps.match.params.month && nextProps.match.params.month<13 ) ? (nextProps.match.params.month) :(now.getMonth()+1);
        const paramYearUpdate = (0 < nextProps.match.params.year && nextProps.match.params.year<10000 ) ? (nextProps.match.params.year) :(now.getFullYear());
        const firstDateUpdate = new Date(paramYearUpdate, paramMonthUpdate-1, 1)
        firstDateUpdate.setFullYear(paramYearUpdate);
        const lastDateUpdate = new Date(paramYearUpdate, paramMonthUpdate, 0)
        lastDateUpdate.setFullYear(paramYearUpdate);
        return {
            daysTotal: lastDateUpdate.getDate(),
            currentMonth: paramMonthUpdate,
            currentYear: paramYearUpdate,
            currentFirstDay: firstDateUpdate.getDay()
           }
    }

    constructor(props){
        super(props);
        const now = new Date();
        const paramMonth = (0 < this.props.match.params.month && this.props.match.params.month<13 ) ? (this.props.match.params.month) :(now.getMonth()+1)  ;
        const paramYear = (0 < this.props.match.params.year && this.props.match.params.year<10000 ) ? (this.props.match.params.year) :(now.getFullYear()) ;
        const firstDate = new Date(paramYear, paramMonth-1, 1)
        firstDate.setFullYear(paramYear);
        const lastDate = new Date(paramYear, paramMonth, 0)
        lastDate.setFullYear(paramYear);

        this.state = {
            todayDate: now,
            currentDate: now,
            daysTotal: lastDate.getDate(),
            currentMonth: paramMonth,
            currentYear: paramYear,
            currentFirstDay: firstDate.getDay()
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
                <CalendarHeader currentData={this.state} onMonthChange={this.onMonthChange}/>
                <CalendarPicker datePickerData={this.state}/>
            </div>
        );
    }
}

export default Calendar;
