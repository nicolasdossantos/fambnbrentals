import React from 'react';
import '../../style/ThingsToDo.css';
import { Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttractionCard from './AttractionCard';
import PropTypes from 'prop-types'; // import prop-types

const ToDoCategory = ({ title, items, icon: Icon }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${title}-content`}
          id={`${title}-header`}
        >
          <Grid container spacing={3}>
            <Grid item>
              <Icon className="accordion-icon" />
            </Grid>
            <Grid item>
              <div className="accordion-title">{title} </div>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails style={{ justifyContent: 'center', display: 'flex' }}>
          <Grid container>
            {items.map((attraction, index) => (
              <AttractionCard key={index} {...attraction} />
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// Prop types validation
ToDoCategory.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  icon: PropTypes.elementType.isRequired // elementType is used for React components
};

export default ToDoCategory;
