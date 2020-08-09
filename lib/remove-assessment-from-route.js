export const removeAssessmentFromRoute = (route) =>
  route.split("/").slice(0, 4).join("/");
