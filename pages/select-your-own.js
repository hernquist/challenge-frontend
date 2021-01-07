import Shell from "../components/shell";
import SelectYourOwn from "../components/select-your-own";
import dynamic from "next/dynamic";
import { CHALLENGE_TOKEN } from "../constant";

const LoginPage = dynamic(() => import("./login"));

function SelectYourOwnPage(props) {
  let localToken;

  if (typeof Storage !== "undefined") {
    localToken = localStorage.getItem(CHALLENGE_TOKEN);
  }

  if (!localToken) {
    return <LoginPage />;
  }

  return (
    <Shell>
      <SelectYourOwn {...props} />
    </Shell>
  );
}

export default SelectYourOwnPage;
