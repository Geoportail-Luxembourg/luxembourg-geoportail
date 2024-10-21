import { User, UserApi } from '@/stores/user-manager.store.model'

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL
const LOGOUT_URL = import.meta.env.VITE_LOGOUT_URL
const USERINFO_URL = import.meta.env.VITE_USERINFO_URL

/**
 * Calls "/login" url to authenticate user
 * @param userName The user's name, mandatory
 * @param userPassword  The user's password, mandatory
 * @param isApp If the app is mobile app mode, false by default
 * @returns The api returns user's info is succeeded
 */
export async function authenticate(
  userName: string,
  userPassword: string,
  isApp = false
) {
  const payload = new URLSearchParams({
    login: userName,
    password: userPassword,
    app: isApp ? 'true' : 'false',
  })
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  })

  if (!response.ok) {
    throw new Error('Error while trying to authenticate user')
  }

  const data = <UserApi>await response.json()

  return mapUserApiToUser(data)
}

/**
 * Calls "/logout" url to log out the user
 * @returns The api returns true if succeeded
 */
export async function logout() {
  const response = await fetch(LOGOUT_URL)

  if (!response.ok) {
    throw new Error('Error while trying to logout user')
  }

  const data = await response.text()

  return data
}

/**
 * Calls "/getuserinfo" url to get user's info, the user needs to be authenticated first
 * @returns The api returns user's info is succeeded
 */
export async function getUserInfo() {
  const payload = new URLSearchParams({})
  const response = await fetch(USERINFO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  })

  const data = response.ok && (await response.json())

  if (!data.login) {
    throw new Error('Error while trying to get user info')
  }

  return mapUserApiToUser(<UserApi>data)
}

/**
 * Transform User info returned by api to User model
 * @param userApi The user info returned by the api
 */
function mapUserApiToUser(userApi: UserApi) {
  const {
    is_admin,
    login,
    mail,
    mymaps_role,
    role,
    role_id,
    sn,
    typeUtilisateur,
  } = userApi
  return <User>{
    login,
    mail,
    isAdmin: is_admin,
    mymapsRole: mymaps_role,
    name: sn,
    role,
    roleId: role_id,
    sn,
    typeUtilisateur,
  }
}
