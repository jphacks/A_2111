import styles from '../styles/Home.module.scss'
// import maskPic from '../assets/mask.png'
// import maskOpenVideo from '../assets/maskOpen.mp4'
// import maskCloseVideo from '../assets/maskClose.mp4'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Redirect } from 'react-router-dom'
import NavigateBTInitialize from '../components/NavigateBTInitialize'
// import { useLocation } from 'react-router-dom'
import Header from '../components/header'
import Pairing from '../components/Pairing'
import SelectDemoModeModal from '../components/SelectDemoModeModal'
import SelectUserScreen from './SelectUserScreen'
import MyChart from '../components/myChart'
import AdjustString from '../components/AdjustString'
import PictureModal from '../components/PictureModal'
import Triangle from '../components/Triangle'

// const useQuery = () => new URLSearchParams(useLocation().search)

const Home = () => {
  const {
    shouldShowNewRegistration,
    isMaskOpen,
    setMaskOpen,
    isScanningLE,
    notPairedYet,
    ch,
    signedInUser,
    setOpenAdjustString,
    headerOpen
  } = useContext(AppContext)

  const handleMaskChange = () => {
    const nextStatus = !isMaskOpen
    if (ch) {
      ch.writeValue(Uint8Array.of(nextStatus ? 1 : 0)).then(() => {
        console.log(nextStatus ? 'open!' : 'close!')
        // setLoadingMaskToMove(false)
      })
    }
    setMaskOpen(nextStatus)
  }
  // const name = localStorage.getItem('GARIGARI_MASK_USER_NAME_KEY')

  if (!signedInUser) {
    return (
      <>
        <SelectUserScreen />
        <SelectDemoModeModal />
      </>
    )
  }

  if (shouldShowNewRegistration) {
    return <Redirect to="/signup" />
  }

  return (
    <div>
      <Triangle />

      {/* <SelectDemoModeModal /> */}
      <AdjustString />
      <NavigateBTInitialize />
      <div className={styles.headerContainer}>
        <Header />
        <p
          onClick={() => {
            setOpenAdjustString(true)
          }}
          className={styles.userName}
        >
          {signedInUser}
          <span style={{ fontSize: '20px' }}> さん</span>
        </p>
      </div>
      <div style={{ display: headerOpen ? 'none' : '' }}>
        <p>
          <small>{isScanningLE && <>BlueTooth on&nbsp;</>}</small>
        </p>
        {notPairedYet ? (
          <Pairing />
        ) : (
          <>
            <PictureModal />
            <div className={styles.mask}>
              {isMaskOpen ? (
                <video
                  className={styles.maskPic}
                  // src={maskOpenVideo}
                  src="https://firebasestorage.googleapis.com/v0/b/garigari-mask.appspot.com/o/maskOpen.mp4?alt=media&token=a6b41d41-0635-47c5-bf2a-94ca757659f8"
                  autoPlay
                  muted
                ></video>
              ) : (
                <video
                  className={styles.maskPic}
                  //  src={maskCloseVideo}
                  src="https://firebasestorage.googleapis.com/v0/b/garigari-mask.appspot.com/o/maskClose.mp4?alt=media&token=b4807729-e24b-441d-8688-f02ea35d5143"
                  autoPlay
                  muted
                ></video>
              )}
              <p>マスク{isMaskOpen ? '外し中' : '着用中'}</p>
            </div>
            <div
              href="https://youtu.be/VOmlp4k5T0A"
              target="_blank"
              rel="noreferrer"
              data-keyframers-credit
              style={{ color: '#444' }}
            ></div>
            <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

      <p>
        <small>{isScanningLE && <>BlueTooth on&nbsp;</>}</small>
      </p>
      {notPairedYet ? (
        <Pairing />
      ) : (
        <>
          <PictureModal />
          <div className={styles.mask}>
            {isMaskOpen ? (
              <video className={styles.maskPic} src={maskOpenVideo} autoPlay muted></video>
            ) : (
              <video className={styles.maskPic} src={maskCloseVideo} autoPlay muted></video>
            )}
            <p>マスク{isMaskOpen ? '外し中' : '着用中'}</p>
          </div>
          <Triangle />
          <div
            href="https://youtu.be/VOmlp4k5T0A"
            target="_blank"
            rel="noreferrer"
            data-keyframers-credit
            style={{ color: '#444' }}
          ></div>
          <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

          <div
            id="app"
            style={{ marginBottom: '100px', marginTop: '40px' }}
            onChange={handleMaskChange}
          >
            <label className={styles.checker}>
              <input className={styles.checkbox} type="checkbox" />
              <div className={styles.checkbg}></div>
              <div className={styles.checkmark}>
                <svg viewBox="0 0 100 100">
                  <path
                    d="M20,55 L40,75 L77,27"
                    fill="none"
                    stroke="#FFF"
                    stroke-width="15"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </label>
          </div>
          <Triangle />
        </>
      )}
      <div style={{ height: '110vh' }}>
        <MyChart />

      </div>
    </div>
  )
}

export default Home
