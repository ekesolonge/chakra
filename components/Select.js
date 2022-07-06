import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Select as InputSelect,
} from "@chakra-ui/react";
import { useField } from "formik";

const Select = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isRequired>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <InputSelect {...field} {...props}>
        {children}
      </InputSelect>
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default Select;
