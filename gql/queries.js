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
        assessmentType
      }
    }
  }
`;

const FETCH_MODULE = `query GetModule ($slug: String!) {
    module(slug: $slug) {
      numberOfTurns
      slug
      content {
        list
        name
        type
        _id
      }
    }
  }
`;

export { USER, FETCH_MODULE };
