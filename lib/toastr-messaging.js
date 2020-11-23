import { toast, Zoom } from "react-toastify";

export const renderMessage = (correct, numberOfTurns, numberOfAttempts) => {
  toast.dismiss();

  if (numberOfTurns <= numberOfAttempts + 1) {
    return;
  }

  const position = toast.POSITION.BOTTOM_CENTER;

  if (correct) {
    toast.success(`Noice!`, {
      position,
      transition: Zoom,
    });
  } else {
    toast.error(`Nope...`, {
      position,
      transition: Zoom,
    });
  }
};
