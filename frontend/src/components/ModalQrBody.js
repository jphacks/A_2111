import { useQRCode } from "next-qrcode";
import styles from "../styles/Home.module.scss";

const ModalQrBody = ({ text }) => {
  const { inputRef } = useQRCode({
    text: text,
    options: {
      // type: 'image/jpeg',
      level: "M",
      margin: 7,
      scale: 1,
      width: 250,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    },
  });
  return (
    <div>
      <canvas className={styles.qrcode} ref={inputRef} />
    </div>
  );
};

export default ModalQrBody;
