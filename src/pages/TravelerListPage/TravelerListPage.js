import React, { Component } from 'react';
import TravelerItem from './../../components/TravelerItem/TravelerItem';
import TravelerList from './../../components/TravelerList/TravelerList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actFetchDS1552SubmittedTravelersRequest } from './../../actions/DS1552/index';
class TravelerListPage extends Component {

    componentDidMount() {
        this.props.fetchAllTravelers();
    }

    render() {
        var { travelers } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">               
                <TravelerList>
                    {this.showTravelers(travelers)}
                </TravelerList>
            </div>
        );
    }

    showTravelers(travelers) {
        var result = null;
        if (travelers.length > 0) {
            result = travelers.map((traveler, index) => {
                return (
                    <TravelerItem                        
                        key={ traveler.TM_EVENT_GUID }                    
                        traveler={traveler}
                        index={index}
                    
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        travelers: state.travelers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllTravelers : () => {
            dispatch(actFetchDS1552SubmittedTravelersRequest());
        },
 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelerListPage);
