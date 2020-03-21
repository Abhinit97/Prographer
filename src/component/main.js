import React, { Component } from 'react'
import SideBar from './sideBar';
import NavBar from './navBar';
import ProductPhotoshoot from './productPhotoshoot';
import ParentComponent from './mainComponent';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';




class Main extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={3} style={{ backgroundColor: '#282461', width: '66px', position: 'fixed', bottom: 0, top: 0, left: 0 }}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'white', marginLeft: "66px", position: 'fixed', top: 0, right: 0, left: 0, zIndex: 200 }}>
                        <NavBar data={this.props.data.navBar} />

                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: 'white', marginLeft: "66px", marginTop: "90px"  }}>
                        <ParentComponent parentData={this.props.data.parentData} productPhotoshootData={this.props.data.productPhotoshootData} />
                    </Grid>

                </Grid>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => (
    { data: state.data }
)

export default connect(mapStateToProps)(Main);