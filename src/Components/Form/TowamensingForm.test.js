import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TowamensingForm from './TowamensingForm';

jest.mock('react-signature-canvas', () => {
    const React = require('react');
    return React.forwardRef((props, ref) => {
        React.useImperativeHandle(ref, () => ({ clear: () => {},
            getTrimmedCanvas: () => ({ toDataURL: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==' }) }));
        return React.createElement('button', { type: 'button', onClick: props.onEnd }, 'Test signature');
    });
});

jest.mock('@mui/x-date-pickers/MobileDatePicker', () => ({ MobileDatePicker: props => {
    const React = require('react');
    const dayjs = require('dayjs');
    return React.createElement('input', { 'aria-label': props.label, value: props.value?.format('YYYY-MM-DD') || '',
        onChange: event => props.onChange(dayjs(event.target.value)) });
} }));

function showForm() {
    global.fetch = jest.fn(async () => ({ ok: true }));
    render(<MemoryRouter initialEntries={['/bishop/form/Casey/Guest/TEST-BOOKING']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes><Route path="/bishop/form/:firstName/:lastName/:reservationCode" element={<TowamensingForm />} /></Routes>
    </MemoryRouter>);
}

function oneCar() {
    fireEvent.change(screen.getByLabelText(/^License Plate/), { target: { value: ' ABC ' } });
    fireEvent.change(screen.getByLabelText(/^State \/ province/), { target: { value: 'pa' } });
}

test('the complete-list question appears for one complete vehicle and resets after an edit', () => {
    showForm();
    expect(screen.queryByRole('checkbox', { name: /complete vehicle list/i })).not.toBeInTheDocument();
    oneCar();
    const confirmation = screen.getByRole('checkbox', { name: /complete vehicle list/i });
    fireEvent.click(confirmation);
    expect(confirmation).toBeChecked();
    fireEvent.change(screen.getByLabelText(/^License Plate/), { target: { value: 'CHANGED' } });
    expect(confirmation).not.toBeChecked();
    expect(global.fetch).not.toHaveBeenCalled();
});

test('adding and removing rows reset confirmation and two complete vehicles hide the single-car question', () => {
    showForm();oneCar();
    fireEvent.click(screen.getByRole('checkbox', { name: /complete vehicle list/i }));
    fireEvent.click(screen.getByRole('button', { name: /Add Another Car/i }));
    expect(screen.getByRole('checkbox', { name: /complete vehicle list/i })).not.toBeChecked();
    fireEvent.change(screen.getAllByLabelText(/^License Plate/)[1], { target: { value: 'SECOND' } });
    fireEvent.change(screen.getAllByLabelText(/^State \/ province/)[1], { target: { value: 'ny' } });
    expect(screen.queryByRole('checkbox', { name: /complete vehicle list/i })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Remove vehicle 2' }));
    expect(screen.getByRole('checkbox', { name: /complete vehicle list/i })).not.toBeChecked();
    expect(global.fetch).not.toHaveBeenCalled();
});

test('a legitimate one-car registration submits normalized string pairs and explicit confirmation', async () => {
    showForm();oneCar();
    for (const [label, value] of [[/^Email Address/, 'casey@example.invalid'], [/^Address/, '123 Test Road'],
        [/^City/, 'Testville'], [/^State \(2 letter/, 'PA'], [/^Zip/, '12345'], [/^Phone Number/, '555-555-5555'],
        [/^Check-in Date/, '2026-10-26'], [/^Check-out Date/, '2026-10-28']]) {
        fireEvent.change(screen.getByLabelText(label), { target: { value } });
    }
    fireEvent.click(screen.getByRole('button', { name: 'Test signature' }));
    fireEvent.click(screen.getByRole('checkbox', { name: /I have read/i }));
    const submit = screen.getByRole('button', { name: 'Submit Registration' });
    expect(submit).toBeDisabled();
    fireEvent.click(screen.getByRole('checkbox', { name: /complete vehicle list/i }));
    expect(submit).not.toBeDisabled();
    fireEvent.click(submit);
    expect(await screen.findByText(/Your form has been submitted successfully/)).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(global.fetch.mock.calls[0][1].body);
    expect(payload.car1Plate).toBe('ABC');expect(payload.car1State).toBe('PA');
    expect(payload.vehicleListConfirmation).toBe('confirmed_complete');expect(payload.vehicleCount).toBeUndefined();
    expect(payload.car2Plate).toBe('');
});
