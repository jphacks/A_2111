import styles from '../styles/Signup.module.scss'

const Triangle = () => {
  const size = Math.random() * 40 + 30
  const left = Math.random() * (window.innerWidth - size * 2)
  const top = Math.random() * (window.innerHeight - size * 2)
  const angle = Math.random() * 360
  const color = 'rgba(255, 165, 76, ' + (Math.random() * 0.3 + 0.2) + ')'
  const backColor = 'rgba(0, 0, 0, 0)'

  return (
    <div
      className={styles.triangle}
      style={{
        transformOrigin: (left + size) + 'px ' + (top + size) + 'px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: left + 'px',
          top: top + 'px',
          borderTop: size + 'px solid ' + backColor,
          borderBottom: size + 'px solid ' + color,
          borderLeft: size + 'px solid ' + backColor,
          borderRight: size + 'px solid ' + backColor,
          transform: 'rotate(' + angle + 'deg)',
        }}
      >
      </div>
    </div>
  )
}

export default Triangle
