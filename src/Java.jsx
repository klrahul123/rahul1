import React from "react";
import { FcUp } from "react-icons/fc";
import './toy.css';
import { FcHome } from "react-icons/fc";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function Python() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return (
      <div>
         <Accordion  class="num" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Java Introduction</Typography>    
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>   
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Java Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Java Data Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Java Input Output (I/O)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Java Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Java Programming Operators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane20'} onChange={handleChange('pane20')}>
        <AccordionSummary aria-controls="pane20d-content" id="pane20d-header">
          <Typography>Java if...else Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane21'} onChange={handleChange('pane21')}>
        <AccordionSummary aria-controls="pane21d-content" id="pane21d-header">
          <Typography>Java for Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane22'} onChange={handleChange('pane22')}>
        <AccordionSummary aria-controls="pane22d-content" id="pane22d-header">
          <Typography>Java while and do...while Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane23'} onChange={handleChange('pane23')}>
        <AccordionSummary aria-controls="pane23d-content" id="pane23d-header">
          <Typography>Java break and continue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
        <AccordionSummary aria-controls="panel24d-content" id="panel24d-header">
          <Typography>Java switch Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane25'} onChange={handleChange('pane25')}>
        <AccordionSummary aria-controls="pane25d-content" id="pane25d-header">
          <Typography>Java Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane26'} onChange={handleChange('pane26')}>
        <AccordionSummary aria-controls="pane26d-content" id="pane26d-header">
          <Typography>Java Programming Strings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane27'} onChange={handleChange('pane27')}>
        <AccordionSummary aria-controls="pane27d-content" id="pane27d-header">
          <Typography>Java String Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel28'} onChange={handleChange('pane28')}>
        <AccordionSummary aria-controls="pane28d-content" id="pane28d-header">
          <Typography>Java Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
        <AccordionSummary aria-controls="panel29d-content" id="panel29d-header">
          <Typography>Java OOPS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br />
              <a href="https://www.w3schools.com/java/java_oop.asp"> <Button variant="primary" className="bray"> >>Go</Button> </a>
             
          </Typography>
        </AccordionDetails>
      </Accordion>

      
        <br /> 
        
      <a href="/c++"> <Button variant="warning" className="bray"> <FcUp/> Back To TOP</Button> </a>
      <a href="/"> <Button variant="warning"> <FcHome/> Back To Home</Button> </a>
      </div>
    );
  }
