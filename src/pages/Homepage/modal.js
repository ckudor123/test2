import React, { Component } from 'react';
import addClassUpdates from '../../../src/pages/Homepage/utils/hoc';
import { HomepageContext } from "../Homepage"

class Modal extends Component {
    render() {
        return (
            <HomepageContext.Consumer>
                {c => (<div>
                    Modal 2 {c}
                </div>)}
            </HomepageContext.Consumer>
        );
    }
}

export default addClassUpdates(Modal);