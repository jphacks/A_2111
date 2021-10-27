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
import React from "react";
import { useQRCode } from "next-qrcode";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { inputRef } = useQRCode({
    text: "garigari-mask.com",
    options: {
      level: "M",
      margin: 7,
      scale: 1,
      width: 300,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    },
  });

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
              <ModalHeader>マイQRコード</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              {/* <div　className={styles.qrcodeSentence}>
                友達がこのQRコードをスキャンすると、あなたを友達に追加できます。
              </div> */}
                <div>
                  <canvas className={styles.qrcode} ref={inputRef} />
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
