const setKoallas = (state = [], action) => {
    switch (action.type) {
      case 'SET_KOALLAS':
        return  action.payload;
      default:
        return state;
    }
  };

  export default setKoallas;
  