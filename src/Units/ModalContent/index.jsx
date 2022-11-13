/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Rating from '../Rating';
import { getUnit } from './services';
import { euro2Bitcoin } from '../utils';
import './index.sass';

const imgUrlPrefix = process.env.REACT_APP_IMG_URL_PREFIX;

class ModalContent extends Component {
  state = {
    unit: {},
    amenities: [],
    availability: []
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const { data: unit } = await getUnit(id);
    const { amenities, availability } = unit;
    this.setState({ unit, amenities, availability });
  }

  createMarkup = (html) => {
    return { __html: `<i>Description</i>: ${html}` };
  };

  findBiggestImg = (picturesArray) => {
    return picturesArray.find((element) => element.includes('w800'));
  };

  render() {
    const { unit, amenities, availability } = this.state;

    return (
      <>
        <div className="row" id="modalImage">
          {unit && unit.pictures && (
            <img
              src={`${imgUrlPrefix}/${this.findBiggestImg(unit.pictures)}`}
              alt={`${imgUrlPrefix}/${this.findBiggestImg(unit.pictures)}`}
            />
          )}
        </div>

        <div id="nameRegion" className="d-flex justify-content-between">
          <div>
            <b> {`${unit.name} -${unit.region}`}</b>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary special-btn"
              style={{ width: '100px' }}>
              <b>{euro2Bitcoin(unit.price)}</b>
            </button>
          </div>
        </div>

        <Rating stars={unit.rating} />

        <div
          id="description"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={this.createMarkup(unit.description)}
        />

        <div id="amenities">
          <b>Amenities: </b>
          {amenities.join(', ')}
        </div>

        <div className="row">
          {availability.map((year) => {
            return (
              <div className="col-12 col-sm-3 col-md-3" key={year}>
                <button
                  className="btn btn-light btn-block special-btn"
                  type="button"
                  style={{ marginBottom: '8px' }}>
                  {year}
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="btn btn-secondary btn-dark book-btn float-right">
          Book
        </button>
      </>
    );
  }
}

ModalContent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};

export default withRouter(ModalContent);
