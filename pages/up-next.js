import Shell from "../components/shell";
import UpNext from "../components/up-next";
import dynamic from "next/dynamic";
import { CHALLENGE_TOKEN } from "../constant";

const LoginPage = dynamic(() => import("./login"));

function UpNextPage(props) {
  let localToken;

  if (typeof Storage !== "undefined") {
    localToken = localStorage.getItem(CHALLENGE_TOKEN);
  }

  if (!localToken) {
    return <LoginPage />;
  }

  return (
    <Shell>
      <UpNext {...props} />
    </Shell>
  );
}

export default UpNextPage;
