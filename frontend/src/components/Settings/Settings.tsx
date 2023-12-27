import React from 'react'
import { Box, Typography, Slider } from '@mui/material'
import { useDataContext } from '../../Context/DataProvider'

interface ISettingsSliderProps {}

const Settings: React.FC<ISettingsSliderProps> = () => {
  // Access userLimit and setUserLimit from the context
  const { userLimit, setUserLimit } = useDataContext()

  return (
    <Box p={3}>
      {/* Display the current value of the slider */}
      <Typography gutterBottom>{`Current value: ${userLimit}`}</Typography>

      {/* Slider component for adjusting user limit */}
      <Slider
        value={userLimit}
        onChange={(_, newValue) => setUserLimit(newValue as number)}
        data-testid="settingSlider"
        valueLabelDisplay="auto"
        step={1}
        marks={[
          { value: 1, label: '1' },
          { value: 20, label: '20' }
        ]}
        min={1}
        max={20}
      />
    </Box>
  )
}

export default Settings
