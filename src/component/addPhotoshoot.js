import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Card, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import 'date-fns';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



class AddPhotoShoot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: 'Fab Budget (Gold)',
            DummyData: [
                "Dummy Date",
                "Dummy Date",
                "Dummy Date",
                "Dummy Date",
            ],
            startDate: new Date(),
            selectedTime: new Date()
        }
    }

    onChangeStartDate = (date) => {
        this.setState({
            startDate: date.format("YYYY-MM-DD HH:mm"),
        })
    }

    handleChange() {

    }


    handleTimeChange = (date) => {

        this.setState({
            selectedTime: date.format("YYYY-MM-DD"),
        })
    }

    render() {
        const { product } = this.state;
        return (
            <React.Fragment >
                <div style={{ padding: "30px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <FormControl required style={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={this.handleChange}
                                    inputProps={{
                                        id: 'age-native-required',
                                    }}
                                >
                                    <MenuItem value={20}>Fab Budget (Gold)</MenuItem>
                                    <MenuItem value={20}>Dummy Data</MenuItem>
                                    <MenuItem value={20}>Dummy Data</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl required style={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={20}>Photoshoot</MenuItem>
                                    <MenuItem value={20}>Dummy Data</MenuItem>
                                    <MenuItem value={20}>Dummy Data</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="standard-basic" label="Product Name" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="standard-basic" label="Product ID" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>

                    <div style={{ marginTop: "30px", backgroundColor: "#F1F1F1", width: "95%", padding: '15px 40px 15px 20px' }}>
                        location and Contact Details
                    </div>
                    <Grid container spacing={3} style={{ marginTop: '30px' }}>
                        <Grid item xs={3}>
                            <FormControl required style={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={product}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={10}>Bangalore</MenuItem>
                                    <MenuItem value={20}>Chennai</MenuItem>
                                    <MenuItem value={30}>Beijing</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl disabled required style={{ width: '100%' }} >
                                <InputLabel id="demo-simple-select-required-label">Circle</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value='google'
                                    onChange={this.handleChange()}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={6}>
                        <Grid item xs={9}>
                            <FormControl required style={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Full Address</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={product}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "25px" }}>
                            <Link href="#" >
                                Demo Google map kink here
                            </Link>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <MuiPickersUtilsProvider utils={MomentUtils} style={{ width: '100%' }}>
                                <Grid container >
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
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={3}>
                            <MuiPickersUtilsProvider utils={MomentUtils} style={{ width: '100%' }}>
                                <Grid container >
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Time picker"
                                        value={this.state.startDate}
                                        onChange={this.onChangeStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "15px"}}>
                            <TextField id="standard-basic" label="POC Name" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: "15px"}}>
                            <TextField id="standard-basic" label="POC Number" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                style={{ width: "100%" }}
                                id="outlined-multiline-static"
                                label="MRC"
                                multiline
                                rows="4"
                                defaultValue=""
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                style={{ width: "100%" }}
                                id="outlined-multiline-static"
                                label="Comment"
                                multiline
                                rows="4"
                                defaultValue=""
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: "30px" }}>
                        <div style={{ alignSelf: 'center', width: "18%", display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                            <Button variant="contained">Cancel</Button>
                            <Button variant="contained" color="secondary">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default AddPhotoShoot;