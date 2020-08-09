const USER = `query User {
    user {
      _id
      email
      practices {
        _id
        userId
        completedOn
        topic
        engagement
        level
        totalQuestion
        totalCorrect
        score
      }
    }
  }
`;

const FETCH_MODULE = `query GetModule ($slug: String!) {
    module(slug: $slug) {
      numberOfTurns
      fractions {
        list
        name
      }
    }
  }
`;

export { USER, FETCH_MODULE };
