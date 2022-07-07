import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {graphData} from '../../utils/utils'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const Chart = ({dataSet}) => {

    const schools = graphData(dataSet);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
                font:{
                    size: '16',
                    family: "'Josefin Sans', sans-serif"
                }
            }
          },
          title: {
            display: true,
            text: 'Training Schools per district',
            position: 'left',
          },
        },
        scales: {
            x:{
                ticks: {
                    font:{
                        size: '16',
                        family: "'Josefin Sans', sans-serif"
                    }
                }  
            },
            y:{
                ticks: {
                    font:{
                        size: '16',
                        family: "'Josefin Sans', sans-serif"
                    }
                }  
            },

        }
    };

    const data = {
        labels: schools.keys,
        datasets: [
          {
            label: 'Schools',
            data: schools.values,
            backgroundColor: '#E87121',
            borderColor: 'rgb(255, 205, 86)',
            borderRadius: 50,
            barThickness: 30,
          }
        ]
    };

    return <Bar options={options} data={data} />;
}

export default Chart;