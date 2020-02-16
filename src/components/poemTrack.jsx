import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const PoemTrack = props => {
  const {
    track: {
      id, title, origin, author, category, translated,
    },
  } = props;
  return (
    <div className="col-sm-3 col-md-3 mt-1">
      <div className="card">
        <img className="card-img-top" src={logo} alt="track-default-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span>
              {`by: ${author.firstname} ${author.lastname}`}
              <br />
              {`origin: ${origin.tribe}, ${origin.country}`}
              <br />
              <br />
              <span className="badge badge-pill badge-dark">
                {`${category}`}
              </span>
            </span>
          </p>
        </div>
        <div className="card-footer flex-container">
          <Link to={`/translate/listen/${id}/${translated}`} title="Listen">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 502 502"
                enableBackground="new 0 0 502 502;"
                xmlSpace="preserve"
                width="30px"
                height="30px"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0"
              >
                <g id="IconsRepo_bgCarrier" />
                <path d="M428.484,119.923C381.076,72.516,318.044,46.407,251,46.407c-84.644,0-163.032,42.241-209.688,112.996 c-3.041,4.61-1.768,10.813,2.843,13.853c4.61,3.041,10.813,1.768,13.853-2.843C100.953,105.288,173.099,66.407,251,66.407 c124.022,0,225.514,98.248,230.77,221h-11.399c-2.94-14.631-15.888-25.686-31.371-25.686c-17.645,0-32,14.355-32,32v129.871 c0,17.645,14.355,32,32,32c15.484,0,28.431-11.055,31.371-25.686H492c5.523,0,10-4.477,10-10v-122.5 C502,230.363,475.892,167.331,428.484,119.923z M451,423.593c0,6.617-5.383,12-12,12s-12-5.383-12-12V293.722 c0-6.617,5.383-12,12-12s12,5.383,12,12V423.593z M482,409.907h-11v-102.5h11V409.907z" />
                <path d="M20.748,225.318c1.117,0.401,2.258,0.592,3.381,0.592c4.1,0,7.945-2.542,9.412-6.622 c2.326-6.475,4.977-12.922,7.88-19.164c2.329-5.008,0.156-10.955-4.852-13.284c-5.006-2.328-10.955-0.157-13.284,4.852 c-3.155,6.786-6.037,13.795-8.566,20.834C12.851,217.723,15.55,223.45,20.748,225.318z" />
                <path d="M63,261.722c-15.484,0-28.431,11.055-31.371,25.686H20.232c0.554-12.958,2.166-25.839,4.848-38.415 c1.152-5.401-2.293-10.714-7.695-11.866c-5.405-1.153-10.714,2.294-11.866,7.695C1.857,261.997,0,279.689,0,297.407v122.5 c0,5.523,4.477,10,10,10h21.629c2.94,14.631,15.888,25.686,31.371,25.686c17.645,0,32-14.355,32-32V293.722 C95,276.077,80.645,261.722,63,261.722z M31,409.907H20v-102.5h11V409.907z M75,423.593c0,6.617-5.383,12-12,12s-12-5.383-12-12 V293.722c0-6.617,5.383-12,12-12s12,5.383,12,12V423.593z" />
              </svg>
            </span>
          </Link>
          <Link to={`/translate/listen/${translated}`} title="Read">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512;"
                xmlSpace="preserve"
                width="30px"
                height="30px"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0"
              >
                <path d="M478.33,51.307H33.67C15.105,51.307,0,66.411,0,84.977v342.046c0,18.566,15.105,33.67,33.67,33.67h444.66 c18.566,0,33.67-15.105,33.67-33.67V84.977C512,66.411,496.895,51.307,478.33,51.307z M495.967,427.023 c0,9.725-7.912,17.637-17.637,17.637H33.67c-9.725,0-17.637-7.912-17.637-17.637V135.749h479.933V427.023z M495.967,119.716 H16.033V84.977c0-9.725,7.912-17.637,17.637-17.637h444.66c9.725,0,17.637,7.912,17.637,17.637V119.716z" />
                <path d="M469.779,85.511H127.733c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h342.046 c4.427,0,8.017-3.589,8.017-8.017S474.206,85.511,469.779,85.511z" />
                <path d="M408.875,261.737l-22.657-60.419c-2.958-7.891-10.609-13.192-19.071-13.192c-8.427,0-16.077,5.302-19.036,13.192 l-22.657,60.419c-1.554,4.145,0.546,8.766,4.692,10.32c4.146,1.553,8.767-0.546,10.321-4.691l4.463-11.9h44.471l4.463,11.9 c1.207,3.218,4.262,5.204,7.507,5.204c0.935,0,1.887-0.165,2.813-0.512C408.329,270.503,410.431,265.883,408.875,261.737z M350.941,239.432l12.182-32.486c0.625-1.667,2.243-2.788,4.059-2.788c1.782,0,3.398,1.12,4.023,2.788l12.182,32.486H350.941z" />
                <path d="M230.347,153.921H50.772c-9.136,0-16.568,7.432-16.568,16.568v239.432c0,9.136,7.432,16.568,16.568,16.568h179.574 c9.136,0,16.568-7.432,16.568-16.568V170.489C246.914,161.353,239.482,153.921,230.347,153.921z M230.881,409.921 c0,0.295-0.239,0.534-0.534,0.534H50.772c-0.295,0-0.534-0.239-0.534-0.534V170.489c0-0.295,0.239-0.534,0.534-0.534h179.574 c0.295,0,0.534,0.239,0.534,0.534V409.921z" />
                <path d="M461.228,153.921H281.653c-9.136,0-16.568,7.432-16.568,16.568v239.432c0,9.136,7.432,16.568,16.568,16.568h179.574 c9.136,0,16.568-7.432,16.568-16.568V170.489C477.795,161.353,470.363,153.921,461.228,153.921z M461.762,409.921 c0,0.295-0.239,0.534-0.534,0.534H281.653c-0.295,0-0.534-0.239-0.534-0.534V170.489c0-0.295,0.239-0.534,0.534-0.534h179.574 c0.295,0,0.534,0.239,0.534,0.534V409.921z" />
                <path d="M332.96,299.29h-25.653c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017S337.388,299.29,332.96,299.29z" />
                <path d="M367.165,333.495h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S371.592,333.495,367.165,333.495z" />
                <path d="M435.574,299.29h-68.409c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409 c4.427,0,8.017-3.589,8.017-8.017S440.001,299.29,435.574,299.29z" />
                <path d="M332.96,367.699h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C340.977,371.289,337.388,367.699,332.96,367.699z" />
                <path d="M435.574,367.699h-68.409c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h68.409 c4.427,0,8.017-3.589,8.017-8.017C443.591,371.289,440.001,367.699,435.574,367.699z" />
                <path d="M435.574,333.495H401.37c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h34.205 c4.427,0,8.017-3.589,8.017-8.017S440.001,333.495,435.574,333.495z" />
                <path d="M204.693,367.699H179.04c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C212.71,371.289,209.12,367.699,204.693,367.699z" />
                <path d="M204.693,333.495h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S209.12,333.495,204.693,333.495z" />
                <path d="M144.835,367.699H76.426c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h68.409 c4.427,0,8.017-3.589,8.017-8.017C152.852,371.289,149.262,367.699,144.835,367.699z" />
                <path d="M204.693,299.29H179.04c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017S209.12,299.29,204.693,299.29z" />
                <path d="M144.835,299.29H76.426c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409 c4.427,0,8.017-3.589,8.017-8.017S149.262,299.29,144.835,299.29z" />
                <path d="M110.63,333.495H76.426c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h34.205 c4.427,0,8.017-3.589,8.017-8.017S115.058,333.495,110.63,333.495z" />
                <path d="M179.038,196.676h-26.186v-0.534c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017v0.534H110.63 c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h42.318c-1.075,5.499-3.35,13.164-8.132,20.872 c-1.283-2.08-2.46-4.255-3.505-6.544c-1.84-4.028-6.597-5.8-10.623-3.961c-4.028,1.84-5.801,6.595-3.961,10.623 c2.052,4.491,4.504,8.695,7.321,12.596c-4.735,4.154-10.583,7.907-17.845,10.812c-4.111,1.644-6.11,6.31-4.466,10.421 c1.254,3.134,4.264,5.041,7.446,5.041c0.991,0,1.999-0.185,2.975-0.576c9.269-3.708,16.734-8.477,22.757-13.76 c6.486,5.704,14.058,10.345,22.595,13.76c0.977,0.391,1.984,0.576,2.975,0.576c3.182,0,6.192-1.907,7.446-5.041 c1.645-4.111-0.355-8.777-4.466-10.421c-6.798-2.719-12.731-6.302-17.792-10.704c9-12.476,12.331-25.563,13.56-33.694h9.805 c4.427,0,8.017-3.589,8.017-8.017C187.054,200.266,183.465,196.676,179.038,196.676z" />
                <circle cx="42.221" cy="93.528" r="8.017" />
                <circle cx="67.875" cy="93.528" r="8.017" />
                <circle cx="93.528" cy="93.528" r="8.017" />
              </svg>
            </span>
          </Link>
          <Link to={`/translate/listen/${translated}`} title="Like">
            <span>
              <svg
                id="IconsRepoEditor"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 422.686 422.686"
                enableBackground="new 0 0 422.686 422.686;"
                xmlSpace="preserve"
                width="30px"
                height="30px"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0"
              >
                <g id="IconsRepo_bgCarrier" />
                <path
                  style={{ fill: '#010002' }}
                  d="M212.79,397.817l-5.576-4.975c-4.519-4.024-11.201-11.234-21.329-22.142 c-25.044-26.962-71.645-93.422-151.777-166.498l-1.528-1.479l-0.041,0.049l-2.032-2.113C10.9,181.361,0,156.032,0,129.541 C0,71.82,51.129,24.869,113.971,24.869c49.162,0,86.602,49.909,96.901,65.207l1.211-0.285 c10.023-15.013,47.455-64.923,96.641-64.923c62.834,0,113.963,46.951,113.963,104.672c0,29.206-12.957,56.404-36.481,76.628 l-0.39,0.415c-83.57,76.238-127.456,141.722-151.037,168.164c-7.747,8.689-12.868,14.428-16.558,17.932L212.79,397.817z M44.228,191.424l0.829,0.756c80.635,73.539,127.537,140.324,152.744,167.465c5.942,6.405,10.852,11.689,14.656,15.607 c2.772-3.008,6.17-6.82,10.185-11.323c23.776-26.662,68.02-92.56,151.809-168.969l0.87-0.886 c20.069-17.111,31.108-40.033,31.108-64.533c0-48.755-43.837-88.415-97.714-88.415c-32.693,0-64.533,29.978-83.432,58.03 c-2.934,4.398-8.161,7.031-13.949,7.031c-5.788,0-11.006-2.634-13.965-7.047c-18.883-28.035-50.714-58.014-83.407-58.014 c-53.876,0-97.706,39.659-97.706,88.415c0,22.102,9.177,43.317,25.849,59.729l1.162,1.219l-5.154,6.365l5.747-5.747 C43.976,191.204,44.098,191.318,44.228,191.424L44.228,191.424z M38.115,196.854l-5.487,5.828l3.089-2.642L38.115,196.854z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

PoemTrack.propTypes = {
  track: PropTypes.shape({
    audioURI: PropTypes.string,
    textURI: PropTypes.string,
    title: PropTypes.string,
    origin: PropTypes.object,
    author: PropTypes.object,
    category: PropTypes.string,
    translated: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default PoemTrack;
