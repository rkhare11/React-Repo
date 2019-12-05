import React, { Component } from 'react';


class SkiDayCounter extends Component {
  goalPercent = decimal =>{
    return decimal * 100 + '%';
  }

  calcGoalProgress = (total, goal) => {
    return this.goalPercent(total/goal);
  }

  render(){
    const { total, powder, backcountry, goal } = this.props;
    return(
      <section>
        <div>Total Days: {total}</div>
        <div> Powder Days: {powder} </div>
        <div> Backcountry Days: {backcountry}</div>
        <div> Goal: {this.calcGoalProgress(total,goal)}</div>
      </section>
    );
  }
}

export default SkiDayCounter;
