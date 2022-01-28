import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function Templates() {
  const [alignment, setAlignment] = React.useState('card');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="blank">Blank</ToggleButton>
      <ToggleButton value="card">Card</ToggleButton>
      <ToggleButton value="coming soon" disabled>More coming soon</ToggleButton>
    </ToggleButtonGroup>
    </>
  );
}