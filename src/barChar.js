import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(100,929,32,0.2)',
            borderColor: 'rgba(235,80,10,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'Green',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [50, 20, 10, 30, 23, 90, 78]
        }
    ]
};

function Barchart() {
    return (
        <div>
            <h2>Bar Example (custom size)</h2>
            <Bar
                data={data}
                width={1800}
                height={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );

}
export default Barchart;