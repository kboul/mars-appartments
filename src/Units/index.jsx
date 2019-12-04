import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MarsCircleHeader from '../MarsCircleHeader';
import ModalComp from './ModalComp';
import ModalContent from './ModalContent';
import Rating from './Rating';
import Search from './Search';
import UserAvatar from './UserAvatar';
import { getUnits } from './services';
import { euro2Bitcoin } from './utils';
import { getUserImg, getUserName } from '../services/authService';
import { cardStyle, cardBodyStyle, clickableCard } from './index.module.sass';

const imgUrlPrefix = process.env.REACT_APP_IMG_URL_PREFIX;

class Units extends Component {
    state = {
        units: [],
        modal: false,
        searchQuery: '',
        userImg: '',
        userName: ''
    };

    async componentDidMount() {
        const { data: units } = await getUnits();
        const userImg = getUserImg();
        const userName = getUserName();
        this.setState({ units: units.data, userImg, userName });
    }

    toggle = () => {
        this.setState(prevState => ({ modal: !prevState.modal }));
    };

    addIdToUrl = id => {
        const { history } = this.props;
        history.push(`/units/${id}`);
    };

    handleClick = id => {
        this.toggle();
        this.addIdToUrl(id);
    };

    handleSearch = ({ currentTarget: input }) => {
        const searchQuery = input.value;
        this.setState({ searchQuery });
    };

    render() {
        const { userImg, userName, searchQuery, modal, units } = this.state;
        const filteredUnits = units.filter(
            unit =>
                unit.name.toLowerCase().includes(searchQuery) ||
                unit.region.toLowerCase().includes(searchQuery)
        );

        return (
            <div className="container-fluid">
                <div className="d-flex justify-content-between mt-2 mb-4">
                    <MarsCircleHeader background="white" color="black" />
                    <UserAvatar image={userImg} name={userName} />
                </div>

                <Search
                    value={searchQuery}
                    onSearch={this.handleSearch}
                    itemsDisplayed={filteredUnits.length}
                />

                <div className="row mt-2">
                    <ModalComp modal={modal} toggle={this.toggle}>
                        <ModalContent />
                    </ModalComp>
                    {filteredUnits.map(
                        ({
                            id,
                            pictures,
                            name,
                            region,
                            description,
                            cancellation,
                            price,
                            rating
                        }) => {
                            return (
                                <div
                                    className={`col-md-4 ${clickableCard}`}
                                    key={id}>
                                    <span
                                        role="button"
                                        tabIndex="-1"
                                        onKeyPress={() => {}}
                                        onClick={() => this.handleClick(id)}>
                                        <div
                                            className={`card mb-4 box-shadow ${cardStyle}`}>
                                            <img
                                                className="card-img-top"
                                                src={`${imgUrlPrefix}/${pictures[1]}`}
                                                alt={`${imgUrlPrefix}/${pictures[1]}`}
                                            />
                                            <div
                                                className={`card-body ${cardBodyStyle}`}>
                                                <b>{name}</b>
                                                <div>{region}</div>
                                                <div className="card-text">
                                                    {`${description.substring(
                                                        0,
                                                        60
                                                    )}...`}
                                                </div>
                                                <div>{cancellation}</div>
                                                <Rating stars={rating} />
                                                <div className="card-text">
                                                    <b>{euro2Bitcoin(price)}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

Units.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};

export default withRouter(Units);
