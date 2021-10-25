import styles from "../styles/Home.module.scss";
import maskPic from "../assets/mask.png";
import { Box, HStack } from "@chakra-ui/react";
import { BsPersonPlus } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

const Home = () => {
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
        <HStack spacing="45vw">
          <p className={styles.friendListTitle}> 友達一覧</p>
          <BsPersonPlus size={25} />
        </HStack>
        <hr className={styles.border} />
        <Box boxShadow="sm" w="100%" p={2} marginBottom="1.5px"  _hover={{background:"gray.200"}}>
          <p className={styles.friendName}>山田　太郎</p>
        </Box>
        <Box boxShadow="sm" w="100%" p={2} marginBottom="1.5px"  _hover={{background:"gray.200"}}>
          <p className={styles.friendName}>aaaaaaaa</p>
        </Box>
        <Box boxShadow="sm" w="100%" p={2} marginBottom="1.5px"  _hover={{background:"gray.200"}}>
          <p className={styles.friendName}>bbbbbbbb</p>
        </Box>
      </div>
    </div>
  );
};

export default Home;
