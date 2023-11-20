import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CarInput = ({ car, index, isSuccessfull, onCarChange, onRemoveCar }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onCarChange(index, name)(value);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                fullWidth
                required
                label="Car Plate"
                name="plate"
                value={car.plate}
                onChange={handleChange}
                disabled={isSuccessfull}
                sx={{ mr: 1, mt: 1 }}
            />
            <TextField
                fullWidth
                required
                label="State"
                name="state"
                value={car.state}
                onChange={handleChange}
                disabled={isSuccessfull}
                sx={{ mr: 1, mt: 1 }}
            />
            <IconButton onClick={() => onRemoveCar(index)} disabled={isSuccessfull}>
                <RemoveCircleOutlineIcon />
            </IconButton>
        </Box>
    );
};

export default React.memo(CarInput);
