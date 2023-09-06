
interface AuthState {
    loading: boolean;
    token: string | null;
    error: string | null;
  }
  
  interface AuthRequestAction {
    type: typeof AUTH_REQUEST;
  }
  
  interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
    payload: { token: string };  
  }
  
  interface AuthFailureAction {
    type: typeof AUTH_FAILURE;
    payload: string;
  }
  
  interface LogoutAction {
    type: typeof LOGOUT;
  }
  
  type AuthActionTypes = AuthRequestAction | AuthSuccessAction | AuthFailureAction | LogoutAction;
  
  import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from '../types/authTypes';
  
  const initialState: AuthState = {
    loading: false,
    token: null,
    error: null
  };
  
  export default function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
      case AUTH_REQUEST:
        return {
          ...state,
          loading: true
        };
      case AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload.token,
          error: null
        };
      case AUTH_FAILURE:
        return {
          ...state,
          loading: false,
          token: null,
          error: action.payload
        };
      case LOGOUT:
        return {
          ...state,
          token: null
        };
      default:
        return state;
    }
  }