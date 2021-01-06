import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(12),
        flexBasis: '100%',
        flexShrink: 0,
        display: 'block'
    },
    list: {
        width: '100%',
        padding: '0 0 1vw 0',
    },
}));

export const ListBody = ({data}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
      <>
          <Accordion
            className={classes.list}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                  <Typography variant="subtitle1" className={classes.heading}>
                      {data.title && data.title}
                      {data.supplier && data.supplier}
                      <br/>
                      <Typography variant="caption">
                          {Moment(data.date).format('LL')}
                      </Typography>
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      {data.description}
                  </Typography>
              </AccordionDetails>
          </Accordion>
      </>
    );
}