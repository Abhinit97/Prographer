import React, { Component } from 'react'
import { DashboardIcon, CameraIcon } from '../images';



class SideBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ paddingLeft: "20px" }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "26px", fontWeight: '500',  }}>P</h3>
                    </div>
                    <div style={{  }}> 
                        <img src={DashboardIcon()} style={{ height: "20px", width: "20px" }} />
                    </div>
                    <div style={{ marginTop: "30px"}}> 
                        <img src={CameraIcon()} style={{ height: "20px", width: "22px" }} />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default SideBar;