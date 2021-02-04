import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Panel from './Panel'
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other} style={{ height: '100vh' }}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1D1D1D',
        width: '100%',
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    // textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{
                        backgroundColor: '#121212',
                        color: '#03DAC6',
                    }}
                >
                    <Tab label="Training" {...a11yProps(0)} />
                    <Tab label="Testing" {...a11yProps(1)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    style={{ backgroundColor: '#1D1D1D', overflowX: 'hidden' }}
                >

                    {/* TRAINING */}
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        {/* VECTOR INPUT */}
                        <Panel
                            titles={["Vector", "Class"]}
                            data={[
                                [[1, 1, 0, 0, 1, 0], 1],
                                [[0, 1, 1, 0, 1, 0], 1],
                                [[0, 0, 1, 0, 0, 1], 2],
                                [[0, 0, 1, 1, 1, 0], 1],
                                [[0, 1, 0, 0, 0, 1], 2],
                                [[1, 0, 1, 0, 1, 1], 2],
                                [[0, 0, 1, 1, 0, 0], 1],
                                [[1, 1, 0, 1, 0, 0], 1],
                                [[1, 0, 0, 1, 0, 1], 2],
                                [[0, 1, 1, 1, 1, 1], 1],
                            ]}
                        />
                        <Panel
                            titles={["Alfa", "Epoch", "Error"]}
                            data={[[0.4, 100, 0.004]]}
                        />
                        <Panel
                            titles={["Bobot Akhir"]}
                            data={[
                                [0.42, 0.78, 0.33, 0.24, 0.52, 0.99],
                                [0.42, 0.78, 0.33, 0.24, 0.52, 0.99],
                            ]}
                        />
                        <Button variant="contained" color="primary" style={{ width: '100%', textAlign: "center", border: '10px' }}>TRAIN</Button>
                    </TabPanel>

                    {/* TESTING */}
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Panel
                            titles={["Vector", "Prediksi"]}
                            data={[
                                [[1, 1, 0, 0, 1, 0], 1],
                                [[0, 1, 1, 0, 1, 0], 1],
                                [[0, 0, 1, 0, 0, 1], 2],
                                [[0, 0, 1, 1, 1, 0], 1],
                                [[0, 1, 0, 0, 0, 1], 2],
                                [[1, 0, 1, 0, 1, 1], 2],
                                [[0, 0, 1, 1, 0, 0], 1],
                                [[1, 1, 0, 1, 0, 0], 1],
                                [[1, 0, 0, 1, 0, 1], 2],
                                [[0, 1, 1, 1, 1, 1], 1],
                            ]}
                        />
                    </TabPanel>
                </SwipeableViews>
            </AppBar>
        </div>
    );
}
