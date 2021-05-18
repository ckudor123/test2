import React from 'react';
import Modal from './modal';
import Card from '../Card'

export const HomepageContext = React.createContext();
export const CardContext = React.createContext();

class Ggg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            theme: "dark",
        }

    }

    hideModal = () => {
        console.log('clicked');
        this.setState({ showModal: !this.state.showModal, theme: "light" });
    }


    render() {
        console.log('showModal', this.state.showModal);
        return (
            <div>
                <button onClick={this.hideModal}>click here</button>
                {this.state.showModal &&
                    <HomepageContext.Provider value={this.state.theme}>
                        <Modal />
                    </HomepageContext.Provider>
                }
                <CardContext.Provider value={this.state.showModal}>
                    <Card />
                </CardContext.Provider>
            </div>
        )
    }
};

export default Ggg;
