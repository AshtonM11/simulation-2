const initialState = {
  name: "",
  address: "",
  city: "",
  state1: "",
  zipcode: "",
  imgUrl: "",
  mortgage: "",
  rent: ""
};

const CANCEL_FORM = "CANCEL_FORM";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE1 = "UPDATE_STATE1";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMGURL = "UPDATE_IMGURL";
const UPDATE_MORT = "UPDATE_MORT";
const UPDATE_RENT = "UPDATE_RENT";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CANCEL_FORM:
      return Object.assign({}, state, initialState);
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_STATE1:
      return Object.assign({}, state, { state1: action.payload });

    case UPDATE_ZIPCODE:
      return Object.assign({}, state, { zipcode: action.payload });

    case UPDATE_IMGURL:
      return Object.assign({}, state, { imgUrl: action.payload });

    case UPDATE_MORT:
      return Object.assign({}, state, { mortgage: action.payload });

    case UPDATE_RENT:
      return Object.assign({}, state, { rent: action.payload });
    default:
      return state;
  }
}

export function cancelForm() {
  return {
    type: CANCEL_FORM
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState1(state1) {
  return {
    type: UPDATE_STATE1,
    payload: state1
  };
}
export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
}
export function updateImgUrl(imgUrl) {
  return {
    type: UPDATE_IMGURL,
    payload: imgUrl
  };
}
export function updateMort(mortgage) {
  return {
    type: UPDATE_MORT,
    payload: mortgage
  };
}
export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}

export default reducer;
