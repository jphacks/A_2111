import styles from '../styles/Signup.module.scss'
import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { handleID } from '../utils/api';
import { setIdToLocalStorage } from '../utils/storage';

const Signup = () => {
    let [value, setValue] = useState("");

    let handleInputChange = (e) => {
      console.log(e);
      let inputValue = e.target.value;
      setValue(inputValue);
    };
    const handlePost = async () => {
        console.log("postするぞ");
        console.log(value);
        // await postToServer(value);
        setIdToLocalStorage(handleID());
    };
     return (
    <div className={styles.signupContainer}>
      <Input placeholder="FullName" onChange={handleInputChange} value={value} size="lg" mt={140} width={'80'} boxShadow="base blue" />
      <Button mt={20} bg={'blue.200'} size="lg" onClick={handlePost}>
        Create account
      </Button>
    </div>
  )
}
export default Signup
