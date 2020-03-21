import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import EditIcon from '@material-ui/icons/Edit';



class PhotoshootList extends Component {

    getBackgroundColor = (data) => {
        switch(data)  {
            case "GOLD":
                return "#F8C245"
            case "SILVER":
                return "#8ACAFF";
            case "Confirm":
                return "#10C169"
            default:
                return "#E9E9E9"
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card style={{ marginTop: "20px", padding: "15px" }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                                <div style={{ fontSize: '16px', fontWeight: '700' }}>{this.props.data.title}</div>
                                <div style={{ fontSize: '13px', color: "#8D8D8D" }}>{this.props.data.type}</div>
                            </div>
                            <div style={{ fontSize: '10px', backgroundColor: "#C1C1C1", height: "14px", marginLeft: '5px', padding: '3px' }}>{this.props.data.id}</div>
                        </div>
                        <div>
                            <EditIcon />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: "25px", marginBottom: "20px" }}>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>$ {this.props.data.billingAmont}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Biiling Amount</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.category}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>category</div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.product.name}</div>
                                <div style={{ fontWeight: '600', fontSize: "12px", backgroundColor: this.getBackgroundColor(this.props.data.product.type), height: "15px", marginLeft: '5px', padding: '3px' }}>{this.props.data.product.type}</div>
                            </div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Product</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.shootDateAndTime}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>shootDateAndTime</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.location}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Location</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px", color: this.getBackgroundColor(this.props.data.status) }}>{this.props.data.status}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Status</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.approvalStatus ? this.props.data.approvalStatus : '--'}</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Approval Status</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: "12px" }}>{this.props.data.rating}/10</div>
                            <div style={{ color: "#8D8D8D", fontSize: "12px" }}>Rating</div>
                        </div>

                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <div style={{ fontSize: '14px', color: '#8D8D8D', cursor: "pointer" }}>
                            View More
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        )
    }
}

export default PhotoshootList;