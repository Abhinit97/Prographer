import React, { Component } from 'react'
import { NotificationIcon } from '../images'
import PersonIcon from '@material-ui/icons/Person'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



class NavBar extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', height: '60px', paddingTop: "20px", paddingLeft: "18px", paddingRight: "22px",   borderBottomColor: 'black',borderBottomWidth: 1, backgroundColor: 'white' }}>
                    <div>
                        <div style={{fontSize: "20xp", fontWeight: '500' }}>Photoshoot</div>
                        <div style={{ fontSize: '14px', marginTop:"8px", color: '#8D8D8D', }}>Home > Photoshoot</div>
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        <div style={{ height: "39px", width: "39px", borderRadius: "20px", backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: "15px" }}>
                            <img src={NotificationIcon()} style={{ height: "14px", width: '11px' }} />
                        </div>
                        <div style={{ height: "39px", width: "39px", borderRadius: "20px", backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <PersonIcon />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: "39px", marginLeft: "12px", }}>
                            <div>{this.props.data.user_name ? this.props.data.user_name: null}</div>
                            <ArrowDropDownIcon style={{ color : '#F37321'}}></ArrowDropDownIcon>
                        </div>
                    </div>
                    
                </div>
                <hr style={{ margin: 0 }}/>
            </React.Fragment>
        )
    }
}

export default NavBar;