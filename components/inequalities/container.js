import { useState, useEffect } from "react";
import Inequalities from "./component";
import { useRouter } from "next/dist/client/router";
import { SAVE_PRACTICE } from "../../gql/mutations";
import handleMutation from "../../request/handleMutation";
import handleQuery from "../../request/handleMutation";
import { FETCH_MODULE } from "../../gql/queries";
import { removeAssessmentFromRoute } from "../../lib/remove-assessment-from-route";
import isEmpty from "lodash/isEmpty";

const InequalitiesContainer = () => {
  const { route } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [moduleData, setModule] = useState({});

  const truncatedRoute = removeAssessmentFromRoute(route);

  const savePracticeHandler = async (variables) => {
    await handleMutation(SAVE_PRACTICE, variables, setLoading, setError);
  };

  useEffect(() => {
    const getModule = async (route) => {
      const { module } = await handleQuery(
        FETCH_MODULE,
        { slug: route },
        setLoading,
        setError
      );
      setModule(module);
    };

    getModule(truncatedRoute);

    return setModule({});
  }, []);

  if (isEmpty(moduleData)) return null;

  return (
    <Inequalities
      numberOfTurns={7}
      route={route}
      loading={loading}
      error={error}
      clearError={() => setError({})}
      savePracticeHandler={savePracticeHandler}
      module={moduleData}
    />
  );
};

export default InequalitiesContainer;
