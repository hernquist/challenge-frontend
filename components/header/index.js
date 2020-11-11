import Link from "next/link";
import { Container, Title, Links, A, Email } from "./styles";
import { CHALLENGE_TOKEN } from "../../constant";
import { useStoreActions } from "easy-peasy";
import get from "lodash/get";

function IsLoggedIn({ isAuthenticated = false }) {
  const logout = useStoreActions((actions) => actions.logout);
  const handleLogout = () => {
    logout();
    if (typeof Storage !== "undefined") {
      localStorage.setItem(CHALLENGE_TOKEN, "");
    }
  };

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
      <Title>CHALLENGE</Title>
      {email && <Email>{email}</Email>}
      <IsLoggedIn isAuthenticated={isAuthenticated} />
    </Container>
  );
};

export default Header;
