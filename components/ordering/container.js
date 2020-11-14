import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import isEmpty from "lodash/isEmpty";
import Ordering from "./component";
import { SAVE_PRACTICE } from "../../gql/mutations";
import handleMutation from "../../request/handleMutation";
import handleQuery from "../../request/handleMutation";
import { FETCH_MODULE } from "../../gql/queries";
import { removeAssessmentFromRoute } from "../../lib/remove-assessment-from-route";
import { readRoute } from "../../lib/read-route";

const OrderingContainer = () => {
  const router = useRouter();
  const { asPath } = router;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [moduleData, setModule] = useState({});

  const truncatedRoute = removeAssessmentFromRoute(asPath);

  const savePracticeHandler = async (variables) => {
    await handleMutation(SAVE_PRACTICE, variables, setLoading, setError);
  };

  useEffect(() => {
    const getModule = async (slug) => {
      const { module } = await handleQuery(
        FETCH_MODULE,
        { slug },
        setLoading,
        setError
      );
      setModule(module);
    };

    const { level } = readRoute(truncatedRoute);
    if (!level.includes("[")) {
      getModule(truncatedRoute);
    }

    return setModule({});
  }, [truncatedRoute]);

  if (isEmpty(moduleData)) return null;

  console.log("asPath", asPath);

  return (
    <Ordering
      asPath={asPath}
      loading={loading}
      error={error}
      clearError={() => setError({})}
      savePracticeHandler={savePracticeHandler}
      module={moduleData}
    />
  );
};

export default OrderingContainer;
