import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class CalendarHeader extends Component{

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.currentData.currentMonth ===prevState.currentMonth && nextProps.currentData.currentYear ===prevState.currentYear){
            return null;
        }
        const stateObj = {
            currentMonth: nextProps.currentData.currentMonth,
            currentYear: nextProps.currentData.currentYear,
        }
        return stateObj;
    }

    getNextMonth= () =>{
        // -2 to turn to index value of month
        let next = (this.state.currentMonth);
        if(next > 11){
            return {
                newMonth: (next % 12 )+1,
                newYear: parseInt(this.state.currentYear) + 1
            }

        }else{
            return {
                newMonth: (next % 12 )+ 1,
                newYear: parseInt(this.state.currentYear)
            }
        }
    }

    getPreviousMonth= () =>{
        let prev = (this.state.currentMonth - 2) % 12;
        if(prev < 0){
            return {
                newMonth: prev + 12,
                newYear: parseInt(this.state.currentYear) - 1
            }

        }else{
            return {
                newMonth: prev +1,
                newYear: parseInt(this.state.currentYear)
            }
        }
    }

    constructor(props){
        super(props);

        this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June' , 'July', 'August', 'September', 'October', 'November', 'December']
        this.state = {
            currentMonth: this.props.currentData.currentMonth,
            currentYear: this.props.currentData.currentYear
        }

    }

    render(){
        return(
            <div className="header-month">
                <Link to={`/calendar/${this.getPreviousMonth().newYear}/${this.getPreviousMonth().newMonth}/`}>Previous</Link>
                <h1 className="month-name">{this.monthsList[this.state.currentMonth-1]} {this.state.currentYear}</h1>
                <Link to={`/calendar/${this.getNextMonth().newYear}/${this.getNextMonth().newMonth}/`}>Next</Link>
            </div>
        )
    }
}

export default CalendarHeader
