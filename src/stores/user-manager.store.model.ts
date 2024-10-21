export type User = {
  login: string
  mail: string
  isAdmin: boolean // true if is a mymaps admin
  mymapsRole?: number // The role used by mymaps
  name?: string
  role: string
  roleId: number
  sn: string
  typeUtilisateur: string // user's type
}

export type UserApi = {
  is_admin: boolean
  login: string
  mail: string
  mymaps_role: number
  role: string
  role_id: number
  sn: string
  typeUtilisateur: string
}
