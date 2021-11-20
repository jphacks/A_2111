import { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
// import splashDemo from '../assets/logo_video.mp4'
import styles from '../styles/Splash.module.scss'

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
    <div className={shouldAnimateStart ? styles.shouldAnimateStart : styles.playingVideo}>
      <video
        className={styles.splashVideo}
        // src={splashDemo}
        src="https://firebasestorage.googleapis.com/v0/b/garigari-mask.appspot.com/o/logo_video.mp4?alt=media&token=c0b87ee8-5d7c-458c-bc73-0d4615f65651"
        loop={false}
        muted
        autoPlay
        onEnded={handleEndVideo}
      />
    </div>
  )
}

export default Splash
