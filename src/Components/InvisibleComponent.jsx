import { style } from '@mui/system';
import React from 'react';
import '../style/InvisiblePDF.css'

const FormComponent = ({ formData }) => {
    const formatDate = (date) => {
        // Append the time 'T00:00' to ensure the date is treated as local
        const dateObj = new Date(date + 'T00:00');
        return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
      };

    return (
        <div style={styles.formContainer}>

            <header style={styles.header}>
                <h2 style={{paddingBottom: '0px'}}>Towamensing Trails Property Owners Association</h2>
                <h3>SHORT TERM RENTAL REGISTRATION FORM</h3>
            </header>

            <form style={styles.form}>

                <div style={styles.formGroup}>
                    <label style={styles.lable}>NAME OF PROPERTY OWNER (PLEASE PRINT):</label>
                    <input className="input-class" type="text" value={formData.ownerName.toUpperCase()} style={styles.inputThird} readOnly />
                </div>

                <label style={{ marginBottom: '10px' }}>LOCATION OF STR:</label>
                <div style={styles.formGroup}>

                    <div style={styles.flexRow}>
                        <label style={styles.lable}>ACCT/ LOT # </label>
                        <input className="input-class" type="text" value={formData.lotNumber} readOnly />

                        <label style={styles.lable}>911 # </label>
                        <input className="input-class" type="text" value={formData.houseNumber} readOnly />

                        <label style={styles.lable}>STREET: </label>
                        <input className="input-class" type="text" value={formData.houseStreet.toUpperCase()} readOnly />
                    </div>

                </div>

                <div style={styles.formGroupText}>
                <div >I HEREBY AUTHORIZE TTPOA TO RELEASE EIGHT (8) RENTER WRISTBANDS (PORPERTY OWNER/AGENT MUST INITIAL).ONLY 8 WRISTBANDS WILL BE ISSUED (NO EXCEPTIONS). THIS FORM MUST BE FULLY COMPLETED PRIOR TO SUBMISSION.
                    IF THERE ARE ANY CHANGES TO THIS SHORT-TERM RENTER, PLEASE RESUBMIT THE ORIGINAL FORM WITH CHANGES AND NOTE ON
                    TOP OF FORM THAT IS AN UPDATE.
                </div>
                <img style={{ width: '40px', height:'100%',border: '1px solid black', marginLeft: '5px' }} src={formData.initials} alt="Owner Signature" />


                </div>

         
                {/* THIS */}
                <div style={{marginBottom: '10px'}}>
                    <label>WHO WILL BE PICKING UP STR PACKET (Name & Phone number):</label>
                    <input className="input-class" type="text" value={formData.cleaningCrewName.toUpperCase() + ", " + formData.cleaningCrewPhoneNumber} style={styles.input} readOnly />
                </div>

                <div style={styles.formGroup}>
                    <label style={{ marginRight: '15px' }}>FOR QUESTIONS OR COMPLAINTS PLEASE CONTACT:</label>
                    <input className="input-class" type="text" value={formData.ownerPhoneNumber} style={styles.inputThird} readOnly />
                </div>

                <div style={styles.formGroupText}>
                    I AFFIRM THAT I HAVE READ THE CURRENT RULES OF CONDUCT AND UNDERSTAND THAT STR'S CANNOT PICK UP PACKETS (NO EXCEPTIONS). ALSO THAT
                    TTPOA DOES NOT STR'S TO REGISTER THEIR OWN ATV'S, GOLF CARTS, BOATS, ETC.</div>

                <div style={{display: 'flex', alignItems: 'end', justifyContent:'left'}}>
                    <label style={{ marginRight: '15px' }}>SIGNATURE OF PROPERTY OWNER/AGENT:</label>
                    <img style={styles.signatureImage} src={formData.signature}></img>
                </div>

                <div style={styles.formGroupDate}>
                    <label style={{ marginRight: '15px', fontSize: '18px'}}>DURATION OF STAY:</label>

                    <div style={styles.flexRow}>
                        <label style={{ marginLeft: '40px', marginRight: '15px', fontSize: '18px'}}>FROM:</label>
                        <input className="input-class" type="text" value={formatDate(formData.startDate)} style={styles.inputHalf} readOnly />
                        <label style={{ marginRight: '15px', fontSize: '18px'}}>TO:</label>
                        <input className="input-class" type="text" value={formatDate(formData.endDate)} style={styles.inputHalf} readOnly />
                    </div>
                </div>
                {/* THIS */}

                <div style={styles.formGroup}>
                    
                </div>

                <div style={styles.formGroup}>
                    <label style={{ marginRight: '15px' }}>STR NAME (PLEASE PRINT):</label> 
                    <input className="input-class" type="text" value={`${formData.guestFirstName.toUpperCase()} ${formData.guestLastName.toUpperCase()}`} style={styles.inputThird} readOnly />
                </div>
                {/* THIS */}
                <div style={styles.formGroup}>
                    <label style={{ marginRight: '15px' }}>STR MAILING ADDRESS:</label>
                    <input className="input-class" type="text" value={formData.guestAddress.toUpperCase()} readOnly style={styles.inputThird}/>
                </div>


                <div style={styles.formGroup}>

                    <div style={styles.flexRow}>
                        <label style={styles.lable}>CITY: </label>
                        <input className="input-class" type="text" value={formData.guestCity.toUpperCase()} readOnly />

                        <label style={styles.lable}>STATE: </label>
                        <input className="input-class" type="text" value={formData.guestState.toUpperCase()} readOnly />

                        <label style={styles.lable}>ZIP: </label>
                        <input className="input-class" type="text" value={formData.guestZip.toUpperCase()} readOnly />
                        <label style={styles.lable}>PHONE: </label>
                        <input className="input-class" type="text" value={formData.guestPhoneNumber} readOnly />
                    </div>

                </div>

                <div style={styles.formGroupText}>
                    <label>I AFFIRM I HAVE READ THE CURRENT RULES OF CONDUCT AND RENTAL POLICY AND I AM AWARE OF THE TRASH COMPACTOR HOURS UPON CHECKOUT TIME.</label>

                </div>

                <div style={{display: 'flex', alignItems: 'end', justifyContent:'left'}}>
                    <label style={{fontWeight: 'bold'}}>SIGNATURE OF STR:</label>
                    <img src={formData.guestSignature} alt="Guest Signature" style={styles.signatureImage} />
                </div>

                <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <div style={{width: 'fit-content', borderBottom: '1px solid black', textAlign: 'center'}}>LIST ALL LICENSE PLATES STAYING AT THE ABOVE-MENTIONED PROPERTY</div>
                    <div style={{width: 'fit-content', borderBottom: '1px solid black', textAlign: 'center'}}>STATE W/PLATE MUST BE LISTED. (IF STR IS USING A RENTAL CAR, PLEASE WRITE "RENTAL"):</div>
                </div>



                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                    {/* Column for the first three cars */}
                    <div style={{ width: '48%'}}>
                        {formData.cars.slice(0, 3).map((car, index) => (
                            <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                                <label>STATE:</label>
                                <input className="input-class" type="text" value={car.state.toUpperCase()} style={styles.input} readOnly />
                                <label>PLATE:</label>
                                <input className="input-class" type="text" value={car.plate.toUpperCase()} style={styles.input} readOnly />
                            </div>
                        ))}
                    </div>
                    <div style={{width:'4%'}}></div>
                    {/* Column for the remaining cars */}
                    <div style={{ width: '48%' }}>
                        {formData.cars.slice(3).map((car, index) => (
                            <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                                <label>STATE:</label>
                                <input className="input-class" type="text" value={car.state.toUpperCase()} style={styles.inputHalf} readOnly />
                                <label>PLATE:</label>
                                <input className="input-class" type="text" value={car.plate.toUpperCase()} style={styles.inputHalf} readOnly />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{borderBottom:  '1px solid black', fontWeight: 'bold', width: 'fit-content', marginTop: '5px'}}>OFFICE USE ONLY:</div>
                <div>INITIALS:</div>
                <div>WRISTBAND(S):</div>

            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        fontFamily: 'Arial, sans-serif',
        paddingLeft: '20px',
        paddingRight: '20px',   
        width: '215.9mm',
        height: '279.4mm',
        border: '1px solid #000',
        backgroundColor: '#fff',
        fontSize: '12px'    },

    boldText: {
        fontWeight: 'bold'
    },
    header: {
        textAlign: 'center'
    },
    lable: {
        width: 'fit-content',
        paddingRight: '5px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
    },

    formGroupDate: {
        marginBottom: '30px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
    },


    formGroupText: {
        marginBottom: '20px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
    },
    textIntensive: {
        display: 'flex',
        flexDirection: 'column',
    },


    formGroupNoMargin: {
        marginBottom: '0px',
        display: 'flex',
        flexDirection: 'row',
    },
    formGroupHalf: {
        flex: '1',
        marginBottom: '10px',
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexRowStart: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    input: {
        width: '100%',
        paddingBottom: '5px'

    },
    inputThird: {
        width: 'calc(33% - 10px)',
       
       
    },
    inputHalf: {
        width: 'calc(50% - 10px)',
        padding: '5px',
        border: '0px 0px 1px 0px solid #000',
    },
    inputSmall: {
        width: '50px',
        padding: '5px',
        marginBottom: '5px',
        border: '0px 0px 1px 0px solid #000',
    },
    labelTo: {
        alignSelf: 'center',
        padding: '0 10px',
    },
    signatureImage: {
        width: '100px',
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'center',
      
        marginBottom: '5px',
        marginTop: '-18px'
    },
    inline: {
        display: 'flex',
        justifyContent: 'space-between',
    }
};

export default FormComponent;
