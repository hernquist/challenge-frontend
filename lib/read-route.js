export const readRoute = (route) => {
  const [_, topic, engagement, level, assessment] = route.split("/");

  return { topic, engagement, level, assessment };
};
