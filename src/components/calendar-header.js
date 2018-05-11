import React, {Component} from 'react';

class CalendarHeader extends Component{

    getNextMonth= () =>{
        let next = (this.state.currentMonth + 1);
        if(next > 11){
            this.setState({currentYear: this.state.currentYear + 1},()=>{
                next = next % 12;
                this.setState({currentMonth: next}, ()=> this.props.onMonthChange(this.state))
            });
            next = next % 12
        }else{
            this.setState({currentMonth: next}, ()=> this.props.onMonthChange(this.state))
        }
    }

    getPreviousMonth= () =>{
        let prev = (this.state.currentMonth - 1) % 12;
        if (prev < 0){
            this.setState({currentYear: this.state.currentYear-1},()=>{
                prev =+ 11;
                this.setState({currentMonth: prev}, ()=> this.props.onMonthChange(this.state))
            })
        }else{
            this.setState({currentMonth: prev}, ()=> this.props.onMonthChange(this.state))
        }
    }

    constructor(props){
        super(props);

        this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June' , 'July', 'August', 'September', 'October', 'November', 'December']

        this.state = {
            currentMonth: this.props.currentDate.getMonth(),
            currentYear: this.props.currentDate.getFullYear()
        }

    }

    render(){
        return(
            <div className="header-month">
                <a onClick={this.getPreviousMonth} className="pointer">&lt;Previous</a>
                <h1 className="month-name">{this.monthsList[this.state.currentMonth]} {this.state.currentYear}</h1>
                <a onClick={this.getNextMonth} className="pointer">Next&gt;</a>

            </div>
        )
    }
}

export default CalendarHeader
