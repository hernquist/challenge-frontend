import { GraphQLClient } from "graphql-request";
import { CHALLENGE_TOKEN } from "../constant";

const useQuery = async (query, variables) => {
  const endpoint = "http://localhost:3001/graphql";

  let localToken;

  if (typeof Storage !== "undefined") {
    localToken = localStorage.getItem(CHALLENGE_TOKEN);
  }

  const graphQLClient = new GraphQLClient(endpoint, {
    // credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ["x-token"]: localToken || null,
    },
  });

  try {
    const data = await graphQLClient.request(query, variables);

    return { data };
  } catch (error) {
    console.log("request error", error);

    return { error };
  }
};

export default useQuery;
