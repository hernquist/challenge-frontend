const SIGNUP = `
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      message
      token
    }
  }
`;

const LOGIN = `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
      token
    }
  }
`;

const SAVE_PRACTICE = `
  mutation SavePractice($practice: PracticeInput) {
    savePractice(practice: $practice) {
      success
      message
    }
  }
`;

export { SIGNUP, LOGIN, SAVE_PRACTICE };
