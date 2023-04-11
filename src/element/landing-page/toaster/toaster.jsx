import ErrorMail from "@/assets/icons/landing-page/error_mail";
import SuccessMail from "@/assets/icons/landing-page/success_mail";
import {Snackbar, Alert, AlertTitle } from "@mui/material";
import React, { forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const Toaster = ({ open, title, subtitle, type, handleClose,vertical,horizontal }) => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => handleClose(type)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarAlert
                anchorOrigin={{ vertical, horizontal }}
          icon={type === "success" ? <SuccessMail /> : <ErrorMail />}
          onClose={() => handleClose(type)}
          severity="success"
          className="font-primary"
          sx={{
            padding: "20px 70px 20px 30px",
            backgroundColor: type === "success" ? "#B6ECCC" : "#FCB2B2",
            "& .MuiAlert-icon": {
              alignItems: "end",
            },
            "& .MuiAlert-action ": {
              position: "absolute",
              top: "0px",
              right: "10px",
            },
          }}
        >
          <AlertTitle className="font-bold text-[18px] p-0 m-0 font-primary text-primary-brown">
            {title}
          </AlertTitle>
          <h3 className="font-primaryLight text-[12px] font-bold text-primary-brown ">
            {subtitle}
          </h3>
        </SnackbarAlert>
      </Snackbar>
    </div>
  );
};

export default Toaster;
