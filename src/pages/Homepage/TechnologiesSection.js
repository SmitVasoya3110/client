import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { autoPlay } from "react-swipeable-views-utils";
import { frontend, cms, backend, graphic, devops } from "./techData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TechWeWorkCard from "./TechWeWorkCard";

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

export default function TechnologiesSection() {
  const techoptions = {
    margin: 20,
    nav: true,
    autoplay: true,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  };

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
    <div>
      <section className="tech-section mb-5">
        <div className="conatainer-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h6 className="small-heading">Our Specialization</h6>
                <h1 className="big-heading">Technologies We Work With</h1>
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
                  <Tab label="Front End" {...a11yProps(0)}>
                    Front End
                  </Tab>
                  <Tab label="CMS" {...a11yProps(1)}>
                    CMS
                  </Tab>
                  <Tab label="Backend" {...a11yProps(2)}>
                    Backend
                  </Tab>
                  <Tab label="Graphic Designing" {...a11yProps(3)}>
                    Graphic Designing
                  </Tab>
                  <Tab label="DevOps" {...a11yProps(4)}>
                    DevOps
                  </Tab>
                </Tabs>

                <SwipeableViews
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                {/* <AutoPlaySwipeableViews
                  index={value}
                  onChangeIndex={handleChangeIndex}
                > */}
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      nav
                      {...techoptions}
                    >
                      {frontend.map((fe, index) => (
                        <TechWeWorkCard
                          key={index}
                          icon={fe.icon}
                          title={fe.title}
                          description={fe.description}
                        />
                      ))}
                    </OwlCarousel>
                  </TabPanel>

                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      nav
                      {...techoptions}
                    >
                      {cms.map((cms, index) => (
                        <TechWeWorkCard
                          key={index}
                          icon={cms.icon}
                          title={cms.title}
                          description={cms.description}
                        />
                      ))}
                    </OwlCarousel>
                  </TabPanel>

                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      nav
                      {...techoptions}
                    >
                      {backend.map((be, index) => (
                        <TechWeWorkCard
                          key={index}
                          icon={be.icon}
                          title={be.title}
                          description={be.description}
                        />
                      ))}
                    </OwlCarousel>
                  </TabPanel>
                  <TabPanel value={value} index={3} dir={theme.direction}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      nav
                      {...techoptions}
                    >
                      {graphic.map((gd, index) => (
                        <TechWeWorkCard
                          key={index}
                          icon={gd.icon}
                          title={gd.title}
                          description={gd.description}
                        />
                      ))}
                    </OwlCarousel>
                  </TabPanel>
                  <TabPanel value={value} index={4} dir={theme.direction}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      nav
                      {...techoptions}
                    >
                      {devops.map((dev, index) => (
                        <TechWeWorkCard
                          key={index}
                          icon={dev.icon}
                          title={dev.title}
                          description={dev.description}
                        />
                      ))}
                    </OwlCarousel>
                  </TabPanel>
                  </SwipeableViews>
                {/* </AutoPlaySwipeableViews> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
