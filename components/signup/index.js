import Link from "next/link";
import { useState } from "react";
import { Container, SubmitButton, Input, Label, Form, A } from "./styles";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { SIGNUP } from "../../gql/mutations";
import { useRouter } from "next/dist/client/router";
import { CHALLENGE_TOKEN } from "../../constant";
import Error from "../error";
import handleMutation from "../../request/handleMutation";

const Signup = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signupError, setError] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMessage, setMessage] = useState("");

  const signupHandler = async (variables) => {
    const { signup } = await handleMutation(
      SIGNUP,
      variables,
      setLoading,
      setError
    );

    if (!isEmpty(signupError)) return;

    const token = get(signup, "token");

    if (token) {
      localStorage.setItem(CHALLENGE_TOKEN, token);

      router.push("/");
    } else {
      const message = get(signup, "message");

      if (message) {
        setMessage(message);
        setPassword("");
      }
    }
  };

  const handleChange = (e, setState) => {
    if (signUpMessage) {
      setMessage("");
    }

    setState(e.target.value);
  };

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      <Error
        visible={!!signUpMessage}
        message={signUpMessage}
        clearError={() => setMessage("")}
      />
      <Error
        visible={!!signupError.message}
        message={signupError.message}
        clearError={() => setError({})}
      />

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signupHandler({ email, password });
        }}
      >
        <Label>EMAIL</Label>
        <Input
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
        ></Input>
        <Label>PASSWORD</Label>
        <Input
          onChange={(e) => handleChange(e, setPassword)}
          value={password}
        ></Input>

        <SubmitButton type="submit">SIGNUP</SubmitButton>
      </Form>
      <Link href="/login">
        <A>already a user?</A>
      </Link>
    </Container>
  );
};

export default Signup;
