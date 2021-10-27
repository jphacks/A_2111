import styles from "../styles/Signup.module.scss";
import { Input, Checkbox, Button, Spacer } from "@chakra-ui/react";

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <Input
        placeholder="FullName"
        size="lg"
        mt={140}
        width={"80"}
        boxShadow="base blue"
      />
      <Input
        placeholder="Password"
        size="lg"
        width={"80"}
        mt={10}
        boxShadow="base"
      />
      <Checkbox mt={10}>Terms and conditions</Checkbox>
      <Spacer />
      <Button mt={20} bg={"blue.200"} size="lg">
        Create account
      </Button>
    </div>
  )
}
export default Signup
