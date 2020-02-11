import React, { useEffect, useState } from 'react'

const CountDown = (props) => {

    const [state, setState] = useState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined

    })
    useEffect(() => {
        const interval = () =>  { setInterval(() => {
            const { timeTillDate, timeFormat } = props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            setState({ days, hours, minutes, seconds });
            
        }, 1000);

    }

        return () => {
            clearInterval(interval())
        }

    })
    const { days, hours, minutes, seconds } = state;
    return (
        <Fragment>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
            <div className="countdown-item">
                {days}
                <span>days</span>
            </div>
            <div className="countdown-item">
                {hours}
                <span>hours</span>
            </div>
            <div className="countdown-item">
                {minutes}
                <span>minutes</span>
            </div>
            <div className="countdown-item">
                {seconds}
                <span>seconds</span>
            </div>
        </div>
    </Fragment>
    )
}

export default CountDown
