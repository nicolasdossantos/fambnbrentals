import React from 'react';
import '../../style/ThingsToDo.css'
import { Accordion, AccordionSummary, AccordionDetails, Grid} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttractionCard from './AttractionCard';
import '../../style/ThingsToDo.css'


const ToDoCategory = (props) => {
  const { title, items, icon: Icon } = props;
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="attractions-content"
          id="attractions-header"
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
            {items.map((attraction) => (
              <AttractionCard key={attraction.name} {...attraction} />
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ToDoCategory;