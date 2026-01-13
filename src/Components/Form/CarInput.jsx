import React from 'react';
import { Box, TextField, IconButton, Grid, Paper } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CarInput = ({ car, index, isSuccessfull, onCarChange, onRemoveCar, showRemove = true }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onCarChange(index, name)(value);
    };

    return (
        <Paper 
            variant="outlined" 
            sx={{ 
                p: 2, 
                mb: 2, 
                borderRadius: 2,
                backgroundColor: 'grey.50'
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                    <TextField
                        fullWidth
                        required
                        label="License Plate"
                        name="plate"
                        value={car.plate}
                        onChange={handleChange}
                        disabled={isSuccessfull}
                        size="medium"
                        placeholder="e.g., ABC1234"
                    />
                </Grid>
                <Grid item xs={10} sm={5}>
                    <TextField
                        fullWidth
                        required
                        label="State"
                        name="state"
                        value={car.state}
                        onChange={handleChange}
                        disabled={isSuccessfull}
                        size="medium"
                        placeholder="e.g., PA"
                        inputProps={{ maxLength: 2, style: { textTransform: 'uppercase' } }}
                    />
                </Grid>
                <Grid item xs={2} sm={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {showRemove && (
                        <IconButton 
                            onClick={() => onRemoveCar(index)} 
                            disabled={isSuccessfull}
                            color="error"
                            size="medium"
                            sx={{ 
                                '&:hover': { 
                                    backgroundColor: 'error.light',
                                    color: 'white'
                                } 
                            }}
                        >
                            <DeleteOutlineIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default React.memo(CarInput);
