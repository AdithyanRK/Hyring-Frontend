import ErrorMail from "@/assets/icons/landing-page/error_mail";
import SuccessMail from "@/assets/icons/landing-page/success_mail";
import { Snackbar, Alert, AlertTitle, useMediaQuery } from "@mui/material";
import React, { forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const Toaster = ({
  open,
  title,
  subtitle,
  type,
  handleClose,
  vertical,
  horizontal,
}) => {
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => handleClose(type)}
        anchorOrigin={{
          vertical: "top",
          horizontal: isXs ? "center" : "right",
        }}
      >
        <SnackbarAlert
          anchorOrigin={{ vertical, horizontal }}
          icon={type === "success" ? <SuccessMail /> : <ErrorMail />}
          onClose={() => handleClose(type)}
          severity="success"
          className="font-primary"
          sx={{
            padding: isXs ? "10px" : "20px 70px 20px 30px",
            backgroundColor: type === "success" ? "#B6ECCC" : "#FCB2B2",
            "& .MuiAlert-icon": {
              alignItems: isXs ? "center" : "end",
            },
            "& .MuiAlert-action ": {
             display: isXs ? "none" : "flex",
              position: "absolute",
              top: "0px",
              right: isXs ? "1px" : "10px",
            },
          }}
        >
          <AlertTitle className={`font-bold  ${isXs ? "text-[15px]" : "text-[18px]"} p-0 m-0 font-primary text-primary-brown`}>
            {title}
          </AlertTitle>
          <h3 className={`font-primaryLight ${isXs ? "text-[10px]" : "text-[12px]"} font-bold text-primary-brown`}>
            {subtitle}
          </h3>
        </SnackbarAlert>
      </Snackbar>
    </div>
  );
};

export default Toaster;