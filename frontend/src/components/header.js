import '../styles/header.css'
import Logo from '../assets/newIcon.png'
import { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AppContext } from '../contexts/AppContext'

const Header = () => {
  const { headerOpen, setHeaderOpen } = useContext(AppContext)

  return (
    <>
      <img
        className="HeaderLogo"
        src={Logo}
        alt="Logo"
        onClick={() => setHeaderOpen(!headerOpen)}
      />
      <div className={headerOpen ? 'headerOpen about' : 'about'} />
      <div className={headerOpen ? 'about_content_show about_content' : 'about_content'}>
        <div>
          <p className="MAPLE_title">
            <span className="title_text">COCONO</span>
            <span className="title_text">MASK</span>
          </p>
          <p className="MAPLE_sub"></p>
          <p className="MAPLE_sub2">マスクの自動開閉で快適な毎日を</p>
        </div>
        <button
          style={{
            color: '#222',
            background: '#ddd',
            border: '1px solid black',
            padding: '10px',
            // borderRadius: '15px'
            textAlign: 'center'
          }}
          onClick={() => setHeaderOpen(!headerOpen)}
        >
          <span>close</span>
        </button>
        <div className="footer">
          <p className="teamName">A-2111 ガリガリ君</p>
          <a href="https://github.com/JPHacks/A_2111" target="blank" rel="noreferrer">
            <div className="icon1">
              <FaGithub size={30} color="black" />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
