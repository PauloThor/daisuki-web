import { Toaster as HotToaster } from "react-hot-toast";
import { Color } from "../../model/enums/theme-colors";

const Toaster = () => {
  return (
    <HotToaster
      toastOptions={{
        success: {
          style: {
            background: Color.TEXT_SECONDARY,
            color: Color.MAIN_DARK,
          },
        },
        error: {
          style: {
            background: Color.HIGHLIGHT_DARK,
            color: "#FAFAFA",
          },
        },
        loading: {
          style: {
            background: Color.TEXT_MAIN,
            color: Color.MAIN_DARK,
          },
        },
      }}
    />
  );
};

export default Toaster;
