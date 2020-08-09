import useQuery from "./useQuery";

const handleMutation = async (
  query,
  variables,
  setLoading = () => {},
  setError = () => {}
) => {
  setLoading(true);

  const { data = {}, error } = await useQuery(query, variables);

  setLoading(false);

  if (error) {
    setError(error);
  }

  return data;
};

export default handleMutation;
