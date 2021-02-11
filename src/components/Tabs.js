import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Panel from './Panel'
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { train } from './lvq'
import Modal from './Modal'

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
    const [value, setValue] = useState(0);
    const dataTrain = {
        vector: [
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
        ],
        a: 0.04,
        epoch: 10,
    }

    // const [dataTest, setDataTest] = useState(dataTrain.vector)
    const [dataTest, setDataTest] = useState([])

    // const { classType, bobotAkhir, vectors, distances, targets, pred } = train(dataTrain.vector, dataTrain.a, dataTrain.epoch)
    const bobotAkhir = train(dataTrain.vector, dataTrain.a, dataTrain.epoch)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // Modal Toggler
    const [displayModal, setDisplayModal] = useState('none')

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Modal
                    display={displayModal}
                    onClick={() => setDisplayModal('none')}
                    updateDataTest={setDataTest}
                    weights={bobotAkhir}
                />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
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
                            data={dataTrain.vector}
                        />
                        <Panel
                            titles={["Alfa", "Epoch", "Error"]}
                            data={[[dataTrain.a, dataTrain.epoch, 0.004]]}
                        />
                        <Panel
                            titles={["Bobot Akhir"]}
                            data={bobotAkhir}
                        />

                    </TabPanel>

                    {/* TESTING */}
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Panel
                            titles={["Vector", "Prediksi"]}
                            data={dataTest}
                        />

                        {/* Floating Action */}
                        <div
                            // onClick={setDisplayModal(displayModal === 'none' ? 'block' : 'none')}
                            onClick={() => setDisplayModal('flex')}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: 10,
                                width: '100%',
                                backgroundColor: '#00c5c538',
                            }}>
                            <h1>+</h1>
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </AppBar>
        </div>
    );
}
