import { Bar, Line, defaults } from 'react-chartjs-2'
import styles from '../styles/Home.module.scss'
import Logo from '../assets/newIcon.png'

const MyChart = () => {
  // TODO グラフのデータ本物にする
  const lineData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'data',
        data: [12, 19, 3, 5, 2, 3],
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 3,
        pointRadius: 0,
      }
    ]
  }
  const barData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'data',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0,
      }
    ]
  }

  defaults.font.size = 20
  const lineOptions = {
    // maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  const barOptions = {
    // maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div>
      <div className={styles.chartTitle}>
        <img  className={styles.chartLogo} src={Logo} alt="chart logo" />
        <p className={styles.chartString}>接触人数</p>
      </div>
      <Bar
        className={styles.bothChart}
        width="400"
        height="400"
        data={barData}
        options={barOptions}
      />
      <div className={styles.chartTitle}>
        <img  className={styles.chartLogo} src={Logo} alt="chart logo" />
        <p className={styles.chartString}>ON/OFF</p>
      </div>
      <Line
        className={styles.bothChart}
        width="400"
        height="400"
        data={lineData}
        options={lineOptions}
      />
    </div>
  )
}

export default MyChart
