const NotFound = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          sorry, not found!
        </p>
      </div>
    </>
  )
}

export default NotFound
