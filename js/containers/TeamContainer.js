import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/team';

import { withRouter } from 'react-router-dom';

import Team from '../components/Team/Team';

class TeamContainer extends Component {
	render() {
		return (
			<Team {...this.props} />
		);
	}
}

const mapStateToProps = (state) => ({
	team: state.team
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamContainer));