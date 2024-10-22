import { afterEach, describe, expect, it, MockedFunction, vi } from 'vitest'
import { User, UserApi } from '@/stores/user-manager.store.model'
import { authenticate, logout, getUserInfo } from './auth.service'

global.fetch = vi.fn()

const mockUserApi: UserApi = {
  login: 'the_user',
  mail: 'the_user@test.com',
  is_admin: true,
  mymaps_role: 999,
  role: 'admin',
  role_id: 1,
  sn: 'Dupont Marcel',
  typeUtilisateur: 'prive',
}

const resultUserInfo: User = {
  login: 'the_user',
  mail: 'the_user@test.com',
  isAdmin: true,
  mymapsRole: 999,
  role: 'admin',
  roleId: 1,
  name: 'Dupont Marcel',
  sn: 'Dupont Marcel',
  typeUtilisateur: 'prive',
}

const mockFetch = (response: any) => {
  ;(fetch as MockedFunction<typeof fetch>).mockResolvedValueOnce(
    response as unknown as Response
  )
}
const mockFetchError = () =>
  mockFetch({
    ok: false,
  })
const mockFetchUserApiSuccess = () =>
  mockFetch({
    ok: true,
    json: vi.fn().mockResolvedValue(mockUserApi),
  })

describe('Auth service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('#authenticate', () => {
    it('should authenticate user successfully and return user info', async () => {
      mockFetchUserApiSuccess()

      const result = await authenticate('the_user', 'the_password')
      expect(result).toStrictEqual(resultUserInfo)
    })

    it('should throw error when authentication fails', async () => {
      mockFetchError()

      await expect(authenticate('the_user', 'the_password')).rejects.toThrow(
        'Error while trying to authenticate user'
      )
    })
  })

  describe('#logout', () => {
    it('should logout user successfully', async () => {
      mockFetch({
        ok: true,
        text: vi.fn().mockResolvedValue('success'),
      })

      const result = await logout()
      expect(result).toBe('success')
    })

    it('should throw error when logout fails', async () => {
      mockFetchError()

      await expect(logout()).rejects.toThrow(
        'Error while trying to logout user'
      )
    })
  })

  describe('#getUserInfo', () => {
    it('should get the user info', async () => {
      mockFetchUserApiSuccess()

      const result = await getUserInfo()
      expect(result).toStrictEqual(resultUserInfo)
    })

    it('should throw error when getUserInfo fails', async () => {
      mockFetchError()

      await expect(getUserInfo()).rejects.toThrow(
        'Error while trying to get user info'
      )
    })
  })
})