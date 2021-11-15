import { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import splashDemo from '../assets/logo_video.mp4'
import '../styles/Splash.scss'

const Splash = () => {
  const { setShowSplash } = useContext(AppContext)

  // 動画の再生が終わって、フェードアウトするところ
  const [shouldAnimateStart, setShouldAnimateStart] = useState(false)

  const handleEndVideo = () => {
    setShouldAnimateStart(true)
    setTimeout(() => {
      setShowSplash(false)
      // scss で transition 1.2s にしてる
    }, 1200)
  }

  return (
    <div className={shouldAnimateStart ? 'shouldAnimateStart' : 'playingVideo'}>
      {/* <h1 style={{ fontSize: '36px' }}>splash screen~</h1> */}
      <video
        className='splashVideo'
        // style={{ border: '2px solid grey' }}
        // src={shouldAnimateStart ? '' : splashDemo}
        src={splashDemo}
        loop={false}
        muted
        autoPlay
        onEnded={handleEndVideo}
      />
    </div>
  )
}

export default Splash
