import React from 'react';
import { TextField, Grid } from '@mui/material';

const FormTextField = ({ name, label, value, onChange, disabled, type = "text", gridProps = {}, required = true, dispatchError }) => {
    const [error, setError] = React.useState(false);

    const handleBlur = () => {
        const hasError = required && value.trim() === '';
        dispatchError(name, hasError);
        setError(hasError);
    };

    return (
        <Grid item {...gridProps}>
            <TextField
                fullWidth
                required={true}
                label={label}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                error={error}
                onBlur={handleBlur}
                helperText={error ? `${label} is required` : ''}
                FormHelperTextProps={{ style: { color: 'red' } }}
            />
        </Grid>
    );
};

export default FormTextField;
