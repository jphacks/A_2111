import { Bar, Line, defaults } from 'react-chartjs-2'
import styles from '../styles/Home.module.scss'
import { IoIosMan } from 'react-icons/io'
import { RiSurgicalMaskLine } from 'react-icons/ri'
const logoSize = 20
const logoColor = '#777777'

const MyChart = () => {
  // TODO グラフのデータ本物にする
  const lineData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'data',
        type: 'line',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        label: 'average',
        type: 'line',
        data: [7, 7, 7, 7, 7, 7],
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 3,
        pointRadius: 0,
      }
    ]
  }
  const barData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'data',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 0,
      },
      {
        label: 'average',
        type: 'line',
        data: [7, 7, 7, 7, 7, 7],
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 3,
        pointRadius: 0,
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
        <IoIosMan className={styles.chartLogo} size={logoSize} color={logoColor}/>
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
        <RiSurgicalMaskLine className={styles.chartLogo} size={logoSize} color={logoColor}/>
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
