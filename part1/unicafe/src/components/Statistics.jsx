import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad)/all
    const positive = (good/all)*100 + '%'
    return (
        <table>
            <tbody>
                <StatisticLine key="neutral" text="neutral" value={neutral} />
                <StatisticLine key="good" text="good" value={good} />
                <StatisticLine key="bad" text="bad" value={bad} />
                <StatisticLine key="all" text="all" value={all} />
                <StatisticLine key="average" text="average" value={average} />
                <StatisticLine key="positive" text="positive" value={positive} />
            </tbody>
        </table>
    )
}

export default Statistics