import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts'
import UsersReducer from './reducer-users'
import SessionReducer from './reducer-session'

const rootReducer = combineReducers({
	posts: PostsReducer,
  users: UsersReducer,
  session: SessionReducer
});

export default rootReducer;