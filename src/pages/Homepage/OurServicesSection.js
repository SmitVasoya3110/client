import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ServiceCard from "./ServiceCard";
// import { autoPlay } from "react-swipeable-views-utils";
import { servicesData } from "./servicesData";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function OurServicesSection() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  // const [start, setStart] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (

      <section className="ourservices-section mb-5" id="our-services">
      
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h6 className="small-heading">Our Services</h6>
                <h1 className="big-heading">
                  We've got you covered <br /> in every area!
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  {servicesData.map((sc, index) => (
                    <Tab key={index} label={sc.name} {...a11yProps(index)} />
                  ))}
                </Tabs>

                <SwipeableViews index={value}
                  onChangeIndex={handleChangeIndex}
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} >
                {/* <AutoPlaySwipeableViews
                  index={value}
                  onChangeIndex={handleChangeIndex}
                > */}
                  {servicesData.map((sc, index) => (
                    <TabPanel
                      key={index}
                      value={value}
                      index={index}
                      dir={theme.direction}
                    >
                      <ServiceCard
                        img={sc.img}
                        name={sc.name}
                        description={sc.description}
                        link={sc.link}
                      />
                    </TabPanel>
                  ))}
                {/* </AutoPlaySwipeableViews> */}
                </SwipeableViews>
              </div>
            </div>
       
        </div>
      </section>
    
  );
}
