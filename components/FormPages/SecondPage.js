import { FormControl } from "@chakra-ui/react";
import Select from "../Select";

const SecondPage = () => {
  return (
    <>
      <h1>Sign Up 2</h1>
      <FormControl>
        <Select label="Occupation" name="occupation" id="occupation">
          <option value="">Select occupation</option>
          <option value="tech">tech</option>
          <option value="law">law</option>
        </Select>
      </FormControl>
      <FormControl>
        <Select label="Income" name="income" id="income">
          <option value="">Select income</option>
          <option value="100000">100000</option>
          <option value="10000000">10000000</option>
        </Select>
      </FormControl>
    </>
  );
};

export default SecondPage;
