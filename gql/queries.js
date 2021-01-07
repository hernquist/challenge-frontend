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
      upNextModules
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

const FETCH_CONTENT_MAP = `
  {
    contentMap {
      _id
      topic
      engagement
      level
      assessment
    }
  }
`;

export { USER, FETCH_MODULE, FETCH_CONTENT_MAP };
