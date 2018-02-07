import React, { Component } from 'react';

class TravelerList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Traveler List</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Action</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Position Title</th>
                                <th>Assignment Number</th>
                                <th>Organization</th>
                                <th>Assignment Date</th>
                                <th>Effective Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TravelerList;