import React, {Component} from 'react';

class CalendarPicker extends Component{

    constructor(props){
        super(props);

        this.monthsList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']
        this.renderDates = this.renderDates.bind(this);
        this.renderDates()
    }

    renderDays(){
        // let weekArray1 = this.monthsList.slice(this.props.datePickerData.currentFirstDay);
        // let weekArray2 = this.monthsList.slice(0,this.props.datePickerData.currentFirstDay);
        // let fullWeekArray = weekArray1.concat(weekArray2);
        return this.monthsList.map(value =>(
                <div key={value}>
                    {value}
                </div>

        ));
    }

    renderDates(){
        let fullDateArray = [];
        for (let i=0; i< this.props.datePickerData.currentFirstDay; i++){
            fullDateArray.push('');
        }
        for (let i=1; i <= this.props.datePickerData.daysTotal; i++){
            fullDateArray.push(i);
        }
        while(fullDateArray.length % 7 !==0 ){
            fullDateArray.push('')
        }
        let weeksArrays = [],
            size = 7;

        while (fullDateArray.length > 0)
            weeksArrays.push(fullDateArray.splice(0, size));


        return weeksArrays.map(week =>(
            <div key={weeksArrays.indexOf(week)} className="header-month">
                {this.renderRows(week)}
            </div>
        ));

    }

    renderRows(week) {
        return week.map((value,index) => (
            <div key={index} className="calendar-column">
                {value}
            </div>
        ))
    }

    render(){
        return(
            <div>
                <div className="header-month">
                    {this.renderDays()}
                </div>
                <div>
                    {this.renderDates()}
                </div>
            </div>

        )
    }
}

export default CalendarPicker
