import Link from "next/link";
import { Container, Title, Links, A, Email } from "./styles";
import { CHALLENGE_TOKEN } from "../../constant";
import { useStoreActions, useStoreState } from "easy-peasy";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { useEffect } from "react";

function IsLoggedIn({ isAuthenticated = false }) {
  const logout = useStoreActions((actions) => actions.logout);
  const fetchUser = useStoreActions((actions) => actions.fetchUser);
  const user = useStoreState((state) => state.user);

  const handleLogout = () => {
    logout();
    if (typeof Storage !== "undefined") {
      localStorage.setItem(CHALLENGE_TOKEN, "");
    }
  };

  useEffect(() => {
    console.log("useEffect.... fetching user");
    if (isEmpty(user) && localStorage.getItem(CHALLENGE_TOKEN)) {
      console.log("fetching user");
      fetchUser();
    }
  }, [user]);

  return isAuthenticated ? (
    <Links>
      <Link href="/login">
        <A onClick={handleLogout}>LOGOUT</A>
      </Link>
    </Links>
  ) : (
    <Links>
      <Link href="/signup">
        <A>SIGNUP</A>
      </Link>
      <Link href="/login">
        <A>LOGIN</A>
      </Link>
    </Links>
  );
}

const Header = ({ user, isAuthenticated }) => {
  const email = get(user, "email");

  return (
    <Container>
      <Link href="/">
        <Title>CHALLENGE</Title>
      </Link>
      {email && <Email>{email}</Email>}
      <IsLoggedIn isAuthenticated={isAuthenticated} />
    </Container>
  );
};

export default Header;
