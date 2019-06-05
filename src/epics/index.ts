import { combineEpics } from 'redux-observable';
import { userLogin, userLogout } from './user';

export default combineEpics(
    userLogin,
    userLogout,
);