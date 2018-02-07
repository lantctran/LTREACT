import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TravelerItem extends Component {


    render() {
        var { traveler, index } = this.props;
 
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{traveler.FIRST_NAME}</td>
                <td>{traveler.LAST_NAME}</td>
                <td>{traveler.POSITION_TITLE}</td>
                <td>{traveler.ASSIGNMENT_NUMBER}</td>
                <td>{traveler.ORG_NAME}</td>
                <td>{traveler.ASSIGNMENT_DATE}</td>
                <td>{traveler.EFFECTIVE_DATE}</td>

                <td>
                    <Link
                        to={`/DS1552/traveler/${traveler.TM_EVENT_GUID}/edit`}
                        className="btn btn-success mr-10"
                    >
                        View 
                    </Link>
         
                </td>
            </tr>
        );
    }
}

export default TravelerItem;
