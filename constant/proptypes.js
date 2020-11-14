import { number, arrayOf, string, shape, bool, func, object } from "prop-types";

export const modulePropTypes = {
  module: shape({
    numberOfTurns: number,
    slug: string.isRequired,
    content: arrayOf(
      shape({
        _id: string.isRequired,
        name: string.isRequired,
        type: string.isRequired,
        list: arrayOf(string),
      })
    ),
  }),
  asPath: string.isRequired,
  error: object,
  loading: bool,
  clearError: func,
  savePracticeHandler: func,
};
