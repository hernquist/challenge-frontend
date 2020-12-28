import { toast, Flip } from "react-toastify";

export const renderMessage = (correct, numberOfTurns, numberOfAttempts) => {
  toast.dismiss();

  if (numberOfTurns <= numberOfAttempts + 1) {
    return;
  }

  const position = toast.POSITION.BOTTOM_CENTER;
  const settings = {
    position,
    transition: Flip,
    autoClose: 2500,
    hideProgressBar: true,
  };

  if (correct) {
    toast.success(`Noice!`, settings);
  } else {
    toast.error(`Nope...`, settings);
  }
};
