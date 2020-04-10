const FOLLOW = 'follow'
const UNFOLLOW ='unfollow'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'

let initialState = {
    users: [  ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userid) {return ({...u, followed: true })}
                    return u;
                })}
        case UNFOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userid) {return ({...u, followed: false })}
                    return u;
                })}
            case SET_USERS:
                return {...state, users: action.users, totalUsersCount: action.totalUsersCount}
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.currentPage}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
                
        default:
            return state;
    }
}

export const follow = (id) => ({type: FOLLOW, userid: id})
export const unfollow = (id) => ({type: UNFOLLOW, userid: id})
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const changeFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;