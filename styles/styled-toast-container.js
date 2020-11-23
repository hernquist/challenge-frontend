import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import styles from "./theme";

const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props if needed
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background-color: ${styles.color.pomengranate};
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    background-color: ${styles.color.atol};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

export default StyledToastContainer;
