import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const MaterialUISwitch1 = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 3,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(25px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.61398 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3Cpath d='M6.07552 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3C/svg%3E")`,
      },
      '& + .MuiSwitch-track': {
         opacity:1,
        backgroundColor: "#fff7ef",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: "#Eaa24B",
    width: 30,
    height: 29,
    border: " 1.5px solid  #462b34",
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.61398 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3Cpath d='M6.07552 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3C/svg%3E")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity:1,
    width: 60,
    height: 24,
    backgroundColor: "#fff7ef",
    borderRadius: "20px",
    border: "1.5px solid #462B34",
  },
}));

export const MaterialUISwitch2 = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 34,
  padding: 5,
  marginTop: "5px",
  '& .MuiSwitch-switchBase': {
    padding: "2.5px",
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(25px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.61398 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3Cpath d='M6.07552 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3C/svg%3E")`,
      },
      '& + .MuiSwitch-track': {
         opacity:1,
        backgroundColor: "#fff7ef",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: "#Eaa24B",
    width: 24,
    height: 24,
    border: " 1.5px solid  #462b34",
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.61398 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3Cpath d='M6.07552 0.666504V10.3332' stroke='%23AA6819' stroke-width='2'/%3E%3C/svg%3E")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity:1,
    width: 40,
    height: 20,
    backgroundColor: "#fff7ef",
    borderRadius: "20px",
    border: "1.5px solid #462B34",
  },
}));