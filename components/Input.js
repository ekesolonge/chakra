import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input as TextInput,
} from "@chakra-ui/react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isRequired isInvalid={meta.touched && meta.error}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <TextInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default Input;
