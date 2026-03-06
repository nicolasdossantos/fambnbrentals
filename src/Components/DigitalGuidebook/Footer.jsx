import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: '#f8f9fa', 
                color: '#2D3748', 
                pt: 8, 
                pb: 6, 
                borderTop: '1px solid #e2e8f0',
                mt: 'auto'
            }}
        >
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#7AC7C4', letterSpacing: '1px' }}>
                            FAMBNB
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                            Experience the perfect getaway at 194 Bishop. 
                            Our digital guidebook is designed to help you make the most of your stay 
                            in the beautiful Poconos.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <FacebookRoundedIcon sx={{ color: '#7AC7C4', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                            <InstagramIcon sx={{ color: '#7AC7C4', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/bishop/digitalguidebook" color="inherit" underline="hover" sx={{ fontSize: '14px', color: '#718096' }}>
                                Home
                            </Link>
                            <Link href="/bishop/digitalguidebook/houserules" color="inherit" underline="hover" sx={{ fontSize: '14px', color: '#718096' }}>
                                House Rules
                            </Link>
                            <Link href="/bishop/digitalguidebook/amenities" color="inherit" underline="hover" sx={{ fontSize: '14px', color: '#718096' }}>
                                Amenities
                            </Link>
                            <Link href="/bishop/digitalguidebook/contactus" color="inherit" underline="hover" sx={{ fontSize: '14px', color: '#718096' }}>
                                Contact Host
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
                            Contact Info
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                            <Box sx={{ p: 1, borderRadius: '50%', bgcolor: '#E8F8F7', color: '#7AC7C4' }}>
                                <PhoneRoundedIcon fontSize="small" />
                            </Box>
                            <Box>
                                <Typography variant="caption" display="block" color="text.secondary">Emergency Contact</Typography>
                                <Typography variant="body2" fontWeight={500}>+1 (555) 123-4567</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ p: 1, borderRadius: '50%', bgcolor: '#E8F8F7', color: '#7AC7C4' }}>
                                <EmailRoundedIcon fontSize="small" />
                            </Box>
                            <Box>
                                <Typography variant="caption" display="block" color="text.secondary">Email Support</Typography>
                                <Typography variant="body2" fontWeight={500}>support@fambnb.com</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                
                <Box sx={{ borderTop: '1px solid #cbd5e0', mt: 6, pt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} FamBnB Rentals. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;