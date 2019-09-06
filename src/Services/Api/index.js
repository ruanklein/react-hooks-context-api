import { users, departaments } from '../../Mock';

export const getUsers = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 2000));
};

export const getDepartments = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(departaments)
    }, 1500));
};