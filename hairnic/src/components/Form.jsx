import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "600px",
      }}
    >
      <FormControl variant="outlined" fullWidth>
        <TextField
          id="email"
          label="Email address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  {" "}
                  <i className="fa fa-envelope"></i>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl variant="outlined" fullWidth>
        <TextField
          id="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          className="bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <button type="submit" className="btn btn-dark w-100">
        Sign In
      </button>
    </Box>
  );
}
