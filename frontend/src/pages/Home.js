import styles from "../styles/Home.module.scss";
import maskPic from "../assets/mask.png";
import {
  Box,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsPersonPlus } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/hooks";
import "";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function qrParse(video) {
    const canvas = new OffscreenCanvas(240, 320);
    const render = canvas.getContext("2d");

    return new Promise((res) => {
      const loop = setInterval(() => {
        render.drawImage(video, 0, 0, canvas.width, canvas.height);

        const img = render.getImageData(0, 0, canvas.width, canvas.height);
        const result = jsQR(img.data, img.width, img.height);

        if (result) {
          clearInterval(loop);
          return res(result.data);
        }
      }, 100);
    });
  }

  function qrGenerate(data) {
    const canvas = new OffscreenCanvas(1, 1);

    return new Promise((res, rej) =>
      QRCode.toCanvas(canvas, data, {}, (err) =>
        !err ? res(canvas) : rej(err)
      )
    );
  }

  document
    .getElementById("data")
    .addEventListener("change", async ({ target }) => {
      document
        .getElementById("canvas")
        .getContext("bitmaprenderer")
        .transferFromImageBitmap(
          (await qrGenerate(target.value)).transferToImageBitmap()
        );
    });

  (async () => {
    const video = document.getElementById("video");
    video.srcObject = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "environment",
      },
    });

    document.getElementById("result").value = await qrParse(video);
  })();

  return (
    <div>
      <div className={styles.headerContainer}>
        <p>**** さん</p>
        <hr className={styles.border} />
      </div>

      <div className={styles.mask}>
        <img className={styles.maskPic} src={maskPic} alt="mask" />
        <p>マスク着用中</p>
      </div>
      <div className={styles.friendList}>
        <HStack spacing="50vw">
          <p className={styles.friendListTitle}> 友達一覧</p>
          <Button variant="ghost" onClick={onOpen}>
            <BsPersonPlus size={25} />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>友達追加</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div style={{ height: "200px" }}>
                  <div id="qrcode"></div>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </HStack>
        <hr className={styles.border} />
        <Box
          boxShadow="xs"
          w="100%"
          p={3}
          marginBottom="1.5px"
          _hover={{ background: "gray.200" }}
        >
          <p className={styles.friendName}>山田　太郎</p>
        </Box>
        <Box
          boxShadow="xs"
          w="100%"
          p={3}
          marginBottom="1.5px"
          _hover={{ background: "gray.200" }}
        >
          <p className={styles.friendName}>aaaaaaaa</p>
        </Box>
        <Box
          boxShadow="xs"
          w="100%"
          p={3}
          marginBottom="1.5px"
          _hover={{ background: "gray.200" }}
        >
          <p className={styles.friendName}>bbbbbbbb</p>
        </Box>
      </div>
    </div>
  );
};

export default Home;
