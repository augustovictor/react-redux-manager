export const SELECT_USER = 'SELECT_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const usersList = [
    { name: 'User 1', hobby: 'Football' },
    { name: 'User 2', hobby: 'basketball' },
    { name: 'User 3', hobby: 'Baseball' },
    { name: 'User 4', hobby: 'Fighting' },
];

const projectsList = [
    { id: 1, title: 'Project1', desc:'Desc1' },
    { id: 2, title: 'Project2', desc:'Desc2' },
    { id: 3, title: 'Project3', desc:'Desc3' },
    { id: 4, title: 'Project4', desc:'Desc4' },
    { id: 5, title: 'Project5', desc:'Desc5' }
];

export function fetchProjects() {
    return {
        type: FETCH_PROJECTS,
        payload: projectsList
    };
};

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