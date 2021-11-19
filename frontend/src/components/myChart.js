import { Line, defaults } from 'react-chartjs-2'
import styles from '../styles/Home.module.scss'
import { IoIosMan } from 'react-icons/io'
import { RiSurgicalMaskLine } from 'react-icons/ri'

const MyChart = () => {
  // TODO グラフのデータ本物にする
  const barData = {
    labels: ['', '日', '月', '火', '水', '木', '金', '土', ''],

    datasets: [
      {
        label: 'average',
        type: 'line',
        data: [7, 7, 7, 7, 7, 7, 7, 7, 7],
        borderColor: ' rgba(255, 0, 0, 0.6)',
        borderWidth: 6,
        pointRadius: 0
      },
      {
        label: 'data',
        type: 'bar',
        data: [null, 12, 19, 3, 5, 2, 3, 20, null],
        backgroundColor: 'rgba(176,196,222,0.7)',
        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  }
  const lineData = {
    labels: ['', '日', '月', '火', '水', '木', '金', '土', ''],
    datasets: [
      {
        label: 'average',
        type: 'line',
        data: [14, 14, 14, 14, 14, 14, 14, 14, 14],
        borderColor: 'rgba(255, 0, 0, 0.6)',
        borderWidth: 6,
        pointRadius: 0
      },
      {
        label: 'data',
        type: 'bar',
        data: [null, 12, 16, 5, 2, 10, 2, 10, null],
        backgroundColor: 'rgba(176,196,222,0.7)',
        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  }

  defaults.font.size = 20
  const barOptions = {
    // maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5
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
  const lineOptions = {
    // maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 6,
          max: 24
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
        <IoIosMan className={styles.chartLogo} size={25} color={'green'} />
        <p className={styles.chartString}>接触人数</p>
        <div>
          <span className={styles.chartString_4}>1日の平均 </span>
          <span className={styles.chartString_5}>27人</span>
        </div>
      </div>
      <Line
        className={styles.bothChart}
        width="400"
        height="400"
        data={barData}
        options={barOptions}
      />
      <div className={styles.chartTitle}>
        <RiSurgicalMaskLine className={styles.chartLogo} size={25} color={'orange'} />
        <p className={styles.chartString}>装着時間</p>
        <div style={{ textAlign: 'right' }}>
          <span className={styles.chartString_2}>1日の平均 </span>
          <span className={styles.chartString_3}>20時間38分</span>
        </div>
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
