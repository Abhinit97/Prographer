import React, { Component } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhotoshootList from './photoshootList';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import TextField from '@material-ui/core/TextField';
import AddPhotoShoot from './addPhotoshoot';
import { Card } from '@material-ui/core';

function TabPanel(props) {
    const { data, children, value, index, ...other } = props;
    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{
                backgroundColor: '#F1F1F1',


            }}
        >

            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px', marginLeft: '20px' }}>
                <SearchIcon fontSize='small' style={{ top: '5px' }} />
                <Input placeholder='Search by Product name..' style={{ width: '250px', marginLeft: '10px' }} />
            </div>

            {value === index && <Box p={3}>{data.map((item) => {
                return (
                    <PhotoshootList data={item} />
                )
            })}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            tab: 0,
            addPhotoshoot: false,
            dateDifferenceValue: 0
        }
    }

    componentDidMount = () => {
        this.getDifferenceInDate(this.state.startDate, this.state.endDate)
    }

    getDifferenceInDate = (startDate, endDate) => {
        const timeDiff = (new Date(startDate)) - (new Date(endDate));
        const days = Math.abs((parseInt(timeDiff / (1000 * 60 * 60 * 24))))
        this.setState({
            dateDifferenceValue: days
        })
    }



    onChangeStartDate = (date) => {
        this.setState({
            startDate: date.format("YYYY-MM-DD"),
        }, () => {
            this.getDifferenceInDate(this.state.startDate, this.state.endDate)
        })
    }

    onChangeEndDate = (date) => {
        this.setState({
            endDate: date.format("YYYY-MM-DD"),
        }, () => {
            this.getDifferenceInDate(this.state.startDate, this.state.endDate)
        })
    }

    handleChange = (event, newValue) => {
        this.setState({
            tab: newValue
        })
    };


    render() {
        return (

            <React.Fragment>
                {!this.state.addPhotoshoot ?
                    <div>
                        <div style={{ width: "100%", display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: '50%', marginLeft: '30px' }}>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div style={{ width: '35%' }}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="YYYY-MM-DD"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="From Date"
                                                value={this.state.startDate}
                                                onChange={this.onChangeStartDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                        <div style={{ width: "10%", minWidth: '70px', marginTop: "20px", display: 'flex', height: "40px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '10px', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                            <div>{this.state.dateDifferenceValue}</div>
                                            <div>Days</div>
                                        </div>
                                        <div style={{ width: '35%' }}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="YYYY-MM-DD"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="From Date"
                                                value={this.state.endDate}
                                                onChange={this.onChangeEndDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </MuiPickersUtilsProvider>
                            </div>
                            <div>
                                <div onClick={() => { this.setState({ addPhotoshoot: true }) }} style={{ justifyContent: 'center', marginTop: '20px', marginRight: '20px', border: "1px solid", padding: "8px", backgroundColor: '#F1F1F1', cursor: "pointer" }}>
                                    <div style={{ fontSize: '12px' }}><span style={{ fontSize: '12px', color: 'red' }}>+ </span>Add Photoshoot</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Tabs value={this.state.tab} onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label={`Product Photoshoot ${this.props.productPhotoshootData.length}`} style={{ fontSize: '10px' }} />
                                <Tab label={`Product Videography`} style={{ fontSize: '10px' }} />
                            </Tabs>
                            <TabPanel value={this.state.tab} index={0} data={this.props.productPhotoshootData}>
                                Item One
                            </TabPanel>
                        </div>
                    </div>
                    :
                    <div style={{ backgroundColor: '#D5D5D5C4', height: '90%' }}>
                        <div onClick={() => { this.setState({ addPhotoshoot: false }) }} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#D5D5D5C4', paddingTop: "5px", paddingBottom: '5px', cursor: "pointer", paddingTop: '10px', paddingBottom: "10px" }}>
                            <ArrowBackIcon style={{ paddingLeft: "30px" }} />
                            <div style={{ marginLeft: "5px", paddingTop: "3px" }}>Back</div>
                        </div>
                        <Card style={{ width: "95%", margin: "auto" }}>
                            <AddPhotoShoot />
                        </Card>
                    </div>
                }

            </React.Fragment>
        )
    }
}

export default ParentComponent;