import React from 'react';
import './Gauge.css';
import circle from './circle.svg'

const Gauge = (props) => {
  const mod = (x, n) => (x % n + n) % n
  const bigDigits = Math.floor(props.value)
  const smallDigit = Math.round((props.value - bigDigits) * 10)

  const lightGreen = "#34c957";

  const angle = Math.max(0, Math.min(props.value * 161 / 100, 207));

  return <div className='Gauge'>
    {/* {props.value} */}
    {/* <div className='circle'><img src={circle} /></div> */}
    <div className="gaugeContainer">
      <img className="circle" src={circle} />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none">
        {/* <circle cx={0.5} cy={0.5} r={0.35} stroke='white' stroke-width="0.03" fill="none" /> */}
        <rect x={0.4} y={0.62} width={0.5} height={0.2} stroke='white' stroke-width="0.02" fill="none" />
            < text x={0.25} y={0.45}
          font-weight="bold"
          font-family="a320"
          stroke-width="0.1"
          font-size="0.13"
          fill="white">5</text>
        <text x={0.58} y={0.38}
          font-weight="bold"
          font-family="a320"
          stroke-width="0.1"
          font-size="0.13"
          fill="white">10</text>
        <text x={0.72} y={0.79}
          font-weight="bold"
          text-anchor="end"
          font-family="a320"
          stroke-width="0.1"
          font-size="0.15"
          fill={lightGreen}>{bigDigits}</text>
        <text x={0.78} y={0.79}
          font-weight="bold"
          font-family="a320"
          stroke-width="0.1"
          font-size="0.13"
          fill={lightGreen}>{smallDigit}</text>
        <circle cx={0.75} cy={0.77} r={0.01} stroke='white' stroke-width="0" fill={lightGreen} />
        <polyline
          points="0.5,0.5 0.18,0.79"
          stroke-linecap="round"
          stroke-alignment="center"
          stroke-width="0.03"
          stroke={lightGreen}
          transform={`rotate(${angle}, 0.5, 0.5)`}
            />
      </svg>
    </div>
  </div>
}

export default Gauge;
