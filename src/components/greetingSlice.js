export const ACTIONS = {
  GET_GREETING: 'GET_GREETING',
};
export const getGreeting = () => async (dispatch) => {
  const json = await fetch('http://localhost:3001/greeting');

  const GreetingsFromApi = await json.json();

  dispatch({ type: ACTIONS.GET_GREETING, payload: GreetingsFromApi });

  return GreetingsFromApi;
};
export function greetingsReducer(state = [], action) {
  switch (action.type) {
    case ACTIONS.GET_GREETING:
      return [...state, action.payload];
    default:
      return state;
  }
}
export default greetingsReducer;
