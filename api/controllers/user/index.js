import register from './auth/register.js';
import login from './auth/login.js';
import getUser from './auth/getcurrent.js';
import updatecurrent from './auth/updatecurrent.js'
import changePassword from './auth/changePassword.js'
import verifypassword from './auth/verifypassword.js'
import idcurrent from './auth/getidcurrent.js'
import getsuser from './auth/getsuser.js'


export const registerUser = register;
export const loginUser = login;
export const currentUser = getUser;
export const updatuser = updatecurrent;
export const updatepassword = changePassword;
export const verifypass= verifypassword;
export const getidcurrent = idcurrent;
export const getscurrent = getsuser;
