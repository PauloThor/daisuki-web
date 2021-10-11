import { Toaster as HotToaster } from "react-hot-toast";

const Toaster = () => {
  return (
    <HotToaster
      toastOptions={{
        success: {
          style: {
            background: "#A4CCF4",
            color: "#141414",
          },
        },
        error: {
          style: {
            background: "#B4184C",
            color: "#FAFAFA",
          },
        },
      }}
    />
  );
};

export default Toaster;
