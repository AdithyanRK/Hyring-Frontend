import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function DropdownSalaries() {
    const data=[
        {
            name:"us"
        },
        {
            name:"Inr"
        },
        {
            name:"eur"
        },
        {
            name:"Aus"
        }
    ]
  return (
    <Select
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  );
}
