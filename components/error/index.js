const Error = ({ clearError, message, visible, buttonMessage = "TRY AGAIN" }) =>
  visible ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ maxWidth: "505%" }}>{message}</h3>
      <button onClick={clearError}>{buttonMessage}</button>
    </div>
  ) : null;

export default Error;
