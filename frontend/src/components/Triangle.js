
const Triangle = (props) => {
  const size = Math.random() * 60 + 20
  const left = Math.random() * (window.innerWidth - size * 2)
  const top = Math.random() * (window.innerHeight - size * 2)
  const alpha = Math.random() * 360
  const color = `rgba(255, 145, 209, ${Math.random() * 0.3 + 0.2})`
  const backColor = 'rgba(0, 0, 0, 0)'

  return (
    <div>
      <style>
        {`@keyframes rotation${props.unique} {
          0%   { transform: rotate(${alpha}deg); }
          100% { transform: rotate(${alpha + 360}deg); }
        }`}
      </style>
      <div
        style={{
          position: 'absolute',
          left: left + 'px',
          top: top + 'px',
          borderTop: size + 'px solid ' + backColor,
          borderBottom: size + 'px solid ' + color,
          borderLeft: size + 'px solid ' + backColor,
          borderRight: size + 'px solid ' + backColor,
          animation: `rotation${props.unique} 40s linear infinite`,
        }}
      ></div>
    </div>
  )
}

export default Triangle
