import { style } from '@mui/system';
import React from 'react';

const FormComponent = ({ formData }) => {
  return (
    <div style={styles.formContainer}>

      <header style={styles.header}>
        <h2>Towamensing Trails Property Owners Association</h2>
        <h3>SHORT TERM RENTAL REGISTRATION FORM</h3>
      </header>

      <form style={styles.form}>
        
            <div style={styles.formGroup}>
                <label>NAME OF PROPERTY OWNER (Please Print):</label>
                <input type="text" value={formData.ownerName} style={styles.input} readOnly />

            </div>
       

        <div style={styles.formGroup}>
          <label>LOCATION OF STR:</label>
          <div style={styles.flexRow}>
            <input type="text" value={formData.lotNumber} style={styles.inputThird} readOnly />
            <input type="text" value={formData.houseNumber} style={styles.inputThird} readOnly />
            <input type="text" value={formData.houseStreet} style={styles.inputThird} readOnly />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label>I HEREBY AUTHORIZE TTPOA TO RELEASE EIGHT (8) RENTER WRISTBANDS (Property owner/agent must initial)</label>
          <input type="text" value={formData.ownerInitialsPath} style={styles.inputSmall} readOnly />
        </div>

        <div style={styles.formGroup}>
          <label>WHO WILL BE PICKING UP STR PACKET (Name & Phone number):</label>
          <div style={styles.flexRow}>
            <input type="text" value={formData.cleaningCrewName} style={styles.inputHalf} readOnly />
            <input type="text" value={formData.cleaningCrewPhoneNumber} style={styles.inputHalf} readOnly />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label>FOR QUESTIONS OR COMPLAINTS PLEASE CONTACT:</label>
          <input type="text" value={formData.ownerPhoneNumber} style={styles.input} readOnly />
        </div>

        <div style={styles.formGroup}>
          <label>DURATION OF STAY: FROM:</label>
          <div style={styles.flexRow}>
            <input type="text" value={formData.startDate} style={styles.inputHalf} readOnly />
            <label style={styles.labelTo}>TO:</label>
            <input type="text" value={formData.endDate} style={styles.inputHalf} readOnly />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label>STR NAME (Please print):</label>
          <input type="text" value={`${formData.guestFirstName} ${formData.guestLastName}`} style={styles.input} readOnly />
        </div>

        <div style={styles.formGroup}>
          <label>STR MAILING ADDRESS:</label>
          <input type="text" value={formData.guestAddress} style={styles.input} readOnly />
        </div>

        <div style={styles.flexRow}>
          <div style={styles.formGroupHalf}>
            <label>CITY:</label>
            <input type="text" value={formData.guestCity} style={styles.input} readOnly />
          </div>
          <div style={styles.formGroupHalf}>
            <label>STATE:</label>
            <input type="text" value={formData.guestState} style={styles.input} readOnly />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label>(PHONE):</label>
          <input type="text" value={formData.guestPhoneNumber} style={styles.input} readOnly />
        </div>

        <div style={styles.formGroup}>
          <label>I AFFIRM I HAVE READ THE CURRENT RULES OF CONDUCT AND RENTAL POLICY AND I AM AWARE OF THE Trash Compactor hours upon check out time.</label>
          <img src={formData.guestSignature} alt="Guest Signature" style={styles.signatureImage} />
        </div>

        <div style={styles.formGroup}>
          <label>SIGNATURE OF STR:</label>
          <img src={formData.guestSignature} alt="Guest Signature" style={styles.signatureImage} />
        </div>

        {formData.cars.map((car, index) => (
          <div style={styles.formGroup} key={index}>
            <label>{`CAR ${index + 1} - STATE & PLATE #:`}</label>
            <input type="text" value={`${car.state} ${car.plateNumber}`} style={styles.input} readOnly />
          </div>
        ))}

        {/* Additional sections for office use only */}
        {/* You can add more sections following the pattern above */}

      </form>
    </div>
  );
};
// 215.9 x 279.4
const styles = {
  formContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    width: '215.9mm',
    height: '279.4mm' ,
    margin: 'auto',
    border: '1px solid #000',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
  },
  formGroupHalf: {
    flex: '1',
    marginBottom: '15px',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    padding: '5px',
    marginBottom: '5px',
    border: '1px solid #000',
  },
  inputThird: {
    width: 'calc(33% - 10px)',
    padding: '5px',
    marginBottom: '5px',
    border: '1px solid #000',
  },
  inputHalf: {
    width: 'calc(50% - 10px)',
    padding: '5px',
    marginBottom: '5px',
    border: '1px solid #000',
  },
  inputSmall: {
    width: '50px',
    padding: '5px',
    marginBottom: '5px',
    border: '1px solid #000',
  },
  labelTo: {
    alignSelf: 'center',
    padding: '0 10px',
  },
  signatureImage: {
    width: '200px',
    height: '50px',
    border: '1px solid #000',
    marginBottom: '5px',
  },
  inline: {
    display: 'flex',
    justifyContent: 'space-between',
  }
};

export default FormComponent;
