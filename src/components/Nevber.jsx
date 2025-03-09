import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mt-2 p-3 px-4 md:px-8 space-y-3 md:space-y-0">
      <div className="flex items-center gap-1">
        <FilterDramaTwoToneIcon />
        <p className="font-bold text-lg">Weather</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-1 w-full md:w-auto">
        <TextField
          variant="outlined"
          placeholder="Search city 'London'"
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className="bg-white rounded-full w-full md:w-80"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          className="rounded-md bg-gray-700 text-white px-4 py-2 h-[38px] w-full md:w-auto"
        >
          Search
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
