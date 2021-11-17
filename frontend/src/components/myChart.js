import { Bar, Line } from 'react-chartjs-2'
import styles from '../styles/Home.module.scss'

const MyChart = () => {

  // TODO グラフのデータ本物にする
  const lineData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'data',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  }
  const barData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'data',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  }

  const lineOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      title: {
        display: true,
        text: 'line data',
      },
      legend: {
        display: false,
      }
    }
  }
  const barOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      title: {
        display: true,
        text: 'bar data',
      },
      legend: {
        display: false,
      }
    }
  }

  return (
    <div>
      <Line
        className={`${styles.lineChart} ${styles.bothChart}`}
        data={lineData}
        options={lineOptions}
      />
      <Bar
        className={`${styles.barChart} ${styles.bothChart}`}
        data={barData}
        options={barOptions}
      />
    </div>
  )
}

export default MyChart