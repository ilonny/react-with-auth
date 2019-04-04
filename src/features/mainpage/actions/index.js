import { RSAA } from 'redux-api-middleware'

export const getListAction = listFromServer => {
  console.log("get list action", listFromServer);
    return {
      type: "GET_LIST_ACTION",
      listFromServer
    };
};

// export function req() {}

export const getListActionH = () => {
    return {
      [RSAA]: {
        endpoint: 'https://reqres.in/api/unknown',
        method: 'GET',
        // Don't have to manually add the Authorization header to every request.
        headers: { 'Content-Type': 'application/json' },
        types: ['REQUEST', 'SUCCESS', 'FAILURE']
      }
    }
  }
//   https://reqres.in/api/unknown
