import React from 'react';
import Gauge from './Gauge'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                    <div className="Panel">
                        <Gauge value={100.0} />
                        <Gauge value={240.75} />
                        <Gauge value={0} />
                        <Gauge value={0} />
                        <Gauge value={98} />
                        <Gauge value={10.7} />
                        <Gauge value={990} />
                    </div>
            </div>
        );
    }
}

export default App;
