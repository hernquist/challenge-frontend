import useQuery from "./useQuery";

const handleQuery = async (
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

export default handleQuery;
