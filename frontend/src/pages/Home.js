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

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Button colorScheme="blue" onClick={onClose} >
                  QRコードを読み込む
                </Button>
                <div style={{height:"200px"}}>QRコードを表示↓</div>
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
