// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {getCommands} from 'mattermost-redux/selectors/entities/integrations';

import ConfirmIntegration from './confirm_integration.jsx';

const mapStateToProps = (state) => ({
    commands: getCommands(state)
});

export default connect(mapStateToProps)(ConfirmIntegration);