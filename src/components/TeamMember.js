import React, {Component} from "react";

class TeamMember extends Component{

    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-header" style={{ backgroundColor: '#343a40', borderRadius: '10px 10px 0 0' }}>
                    <img style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} src={this.props.img} alt="" />
                    </div>
                    <div className="card-body">
                    <h2 className="card-title" style={{ color: '#343a40' }}>{this.props.name}</h2>
                    <h5 className="card-subtitle mb-2 text-muted">{this.props.position}</h5>
                    <div className="card-text">
                        <p>Phone: {this.props.phone}</p>
                        <p>Email: {this.props.email}</p>
                        <p>Website: {this.props.website}</p>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TeamMember