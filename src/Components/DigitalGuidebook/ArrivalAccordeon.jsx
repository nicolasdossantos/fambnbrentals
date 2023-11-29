import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttractionCard from './AttractionCard';
import '../../style/ThingsToDo.css'


const ArrivalAccordeon = (props) => {
    const { title, items, icon: Icon } = props;
    return (
      <div>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="icon-font"/>}
            aria-controls="attractions-content"
          >
            <Grid container spacing={3}>
              <Grid item>
                <Icon className="accordion-icon" />
              </Grid>
              <Grid item>
                <div className="title-font">{title} </div>
              </Grid>
  
            </Grid>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
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
  
  export default ArrivalAccordeon;