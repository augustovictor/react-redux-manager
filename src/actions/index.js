export const SELECT_USER = 'SELECT_USER';
export const FETCH_USERS = 'FETCH_USERS';

const usersList = [
    { name: 'User 1', hobby: 'Football' },
    { name: 'User 2', hobby: 'basketball' },
    { name: 'User 3', hobby: 'Baseball' },
    { name: 'User 4', hobby: 'Fighting' },
];

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: usersList
    };
};

export function selectUser(user) {
    return {
        type: SELECT_USER,
        payload: user
    };
};