import Shell from "../components/shell";
import Dashboard from "../components/dashboard";
import dynamic from "next/dynamic";
import get from "lodash/get";
import { CHALLENGE_TOKEN } from "../constant";
import { USER } from "../gql/queries";
import { useStoreActions } from "easy-peasy";
import useQuery from "../request/useQuery";

const LoginPage = dynamic(() => import("./login"));

function Home(props) {
  const addUserHere = useStoreActions((actions) => actions.addUser);
  addUserHere(props.user);

  let localToken;

  if (typeof Storage !== "undefined") {
    localToken = localStorage.getItem(CHALLENGE_TOKEN);
  }

  if (!localToken) {
    return <LoginPage />;
  }

  return (
    <Shell>
      <Dashboard {...props} />
    </Shell>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const data = await useQuery(USER);
    const user = get(data, "data.user", {});

    return { isAuthenticated: true, user };
  } catch (e) {
    console.log("error from pages/index", e);
    return { isAuthenticated: false, user: null };
  }
};

export default Home;
