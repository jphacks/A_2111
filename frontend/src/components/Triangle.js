// import { transform } from '@chakra-ui/styled-system'
import styles from '../styles/Signup.module.scss'

const Triangle = () => {
  const size = Math.random() * 40 + 90
  const left = Math.random() * 300
  const top = Math.random() * 500
  const angle = Math.random() * 360
  const color = 'rgba(300, 0, 76, ' + (Math.random() * 0.5 + 0.2) + ')'
  const backColor = 'rgba(0, 0, 0, 0)'

  const size2 = Math.random() * 20 + 30
  const left2 = Math.random() * 300
  const top2 = Math.random() * 600
  const angle2 = Math.random() * 360
  const color2 = 'rgba(255, 160, 0, ' + (Math.random() * 0.3 + 0.2) + ')'

  const size3 = Math.random() * 10 + 30
  const left3 = Math.random() * 300
  const top3 = Math.random() * 600
  const angle3 = Math.random() * 360
  const color3 = 'rgba(200, 10, 76, ' + (Math.random() * 0.6 + 0.2) + ')'

  const size4 = Math.random() * 10 + 20
  const left4 = Math.random() * 300
  const top4 = Math.random() * 600
  const angle4 = Math.random() * 360
  const color4 = 'rgba(300, 100, 76, ' + (Math.random() * 0.5 + 0.2) + ')'

  const size5 = Math.random() * 4 + 30
  const left5 = Math.random() * 300
  const top5 = Math.random() * 600
  const angle5 = Math.random() * 360
  const color5 = 'rgba(200, 0, 0, ' + (Math.random() * 0.5 + 0.2) + ')'


  return (
    <div style={{ position: 'relative' }}>
      <span
        className={styles.triangle}
        style={{
          position: 'absolute',
          left: left + 'px',
          top: top + 'px',
          borderTop: size + 'px solid ' + backColor,
          borderBottom: size + 'px solid ' + color,
          borderLeft: size + 'px solid ' + backColor,
          borderRight: size + 'px solid ' + backColor,
          transform: 'rotate(' + angle + 'deg)',
          transformOrigin:"40% 40%"
          
        }}
      ></span>
      <span
        className={styles.triangle2}
        style={{
          position: 'absolute',
          left: left2 + 'px',
          top: top2 + 'px',
          borderTop: size2 + 'px solid ' + backColor,
          borderBottom: size2 + 'px solid ' + color2,
          borderLeft: size2 + 'px solid ' + backColor,
          borderRight: size2 + 'px solid ' + backColor,
          transform: 'rotate(' + angle2 + 'deg)',
          transformOrigin:"60% 80%"
        }}
      ></span>
      <span
        className={styles.triangle3}
        style={{
          position: 'absolute',
          left: left3 + 'px',
          top: top3 + 'px',
          borderTop: size3 + 'px solid ' + backColor,
          borderBottom: size3 + 'px solid ' + color3,
          borderLeft: size3 + 'px solid ' + backColor,
          borderRight: size3 + 'px solid ' + backColor,
          transform: 'rotate(' + angle3 + 'deg)',
          transformOrigin:"50% 50%"

        }}
      ></span>
       <span
        className={styles.triangle4}
        style={{
          position: 'absolute',
          left: left4 + 'px',
          top: top4 + 'px',
          borderTop: size4 + 'px solid ' + backColor,
          borderBottom: size4 + 'px solid ' + color4,
          borderLeft: size4 + 'px solid ' + backColor,
          borderRight: size4 + 'px solid ' + backColor,
          transform: 'rotate(' + angle4 + 'deg)'
        }}
      ></span>
       <span
        className={styles.triangle5}
        style={{
          position: 'absolute',
          left: left5 + 'px',
          top: top5 + 'px',
          borderTop: size5 + 'px solid ' + backColor,
          borderBottom: size5 + 'px solid ' + color5,
          borderLeft: size5 + 'px solid ' + backColor,
          borderRight: size5 + 'px solid ' + backColor,
          transform: 'rotate(' + angle5 + 'deg)'
        }}
      ></span>
    </div>
  )
}

export default Triangle
