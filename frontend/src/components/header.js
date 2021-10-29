import "../styles/header.css";
import Logo from "../assets/MAPLE.png";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <>
      <img
        className="Headerlogo"
        src={Logo}
        alt="Logo"
        onClick={() => setHeaderOpen(!headerOpen)}
      />
      <div className={headerOpen ? "headerOpen about" : "about"} />
      <div
        className={
          headerOpen ? "about_content_show about_content" : "about_content"
        }
      >
        {/* <div>
          <p className="MAPLE_title">MAPLE</p>
          <p className="MAPLE_sub">地図が主役の写真集 MAPLE</p>
          <p className="MAPLE_sub2">
            たくさん投稿してその土地のいいところを伝えよう
          </p>
        </div>
        <button
          style={{color: '#222', background:'#ddd', padding: '10px', borderRadius: '15px'}}
          onClick={() => setHeaderOpen(!headerOpen)}
        >
          <span>close</span>
        </button>
        <div className="footer">
          <p className="teamName">ガリガリ君</p>
          <a
            href="https://github.com/Nano3013/garigarikun"
            target="blank"
            rel="noreferrer"
          >
            <div className="icon1">
              <FaGithub size={30} color="#eee" />
            </div>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Header;
