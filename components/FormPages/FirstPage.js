import { FormControl } from "@chakra-ui/react";
import Input from "../Input";

const FirstPage = () => {
  return (
    <>
      <h1>Sign Up 1</h1>
      <FormControl>
        <Input
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="David"
        />
      </FormControl>
      <FormControl>
        <Input
          label="Email Address"
          name="email"
          id="email"
          type="email"
          placeholder="david@email.com"
        />
      </FormControl>
      <FormControl>
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="David@123"
        />
      </FormControl>
    </>
  );
};

export default FirstPage;
