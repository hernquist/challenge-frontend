import { useState } from "react";
import {
  Container,
  SubmitButton,
  Input,
  Label,
  Form,
  A,
} from "../signup/styles";
import get from "lodash/get";
import { LOGIN } from "../../gql/mutations";
import { useRouter } from "next/dist/client/router";
import { CHALLENGE_TOKEN } from "../../constant";
import Link from "next/link";
import handleMutation from "../../request/handleMutation";
import Error from "../error";
import isEmpty from "lodash/isEmpty";

const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [loginError, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setMessage] = useState("");

  const loginHandler = async (variables) => {
    const { login } = await handleMutation(
      LOGIN,
      variables,
      setLoading,
      setError
    );

    if (!isEmpty(loginError)) return;

    const token = get(login, "token");

    if (token) {
      localStorage.setItem(CHALLENGE_TOKEN, token);

      router.push("/");
    } else {
      const message = get(login, "message");
      console.log("message", message);

      if (message) {
        setMessage(message);
      }
    }
  };

  const handleChange = (e, setState) => setState(e.target.value);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      <Error
        visible={!!loginMessage}
        message={loginMessage}
        clearError={() => setMessage("")}
      />
      <Error
        visible={!!loginError.message}
        message={loginError.message}
        clearError={() => setError({})}
      />

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler({ email, password });
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

        <SubmitButton type="submit">LOGIN</SubmitButton>
      </Form>
      <Link href="/signup">
        <A>new user?</A>
      </Link>
    </Container>
  );
};

export default Login;
