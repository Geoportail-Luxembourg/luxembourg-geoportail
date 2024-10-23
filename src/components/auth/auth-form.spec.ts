import { shallowMount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { useUserManagerStore } from '@/stores/user-manager.store'
import { authService } from '@/services/auth/auth.service'
import AuthForm from './auth-form.vue'

describe('AuthForm', () => {
  let wrapper: VueWrapper
  const isOffLine = false

  beforeEach(() => {
    wrapper = shallowMount(AuthForm, {
      props: {},
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            initialState: {
              'user-manager': {
                currentUser: undefined,
              },
              app: {
                isOffLine,
              },
            },
          }),
        ],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('When user is not authenticated', () => {
    it('should render the login form', () => {
      expect(wrapper.find('form').exists()).toBe(true)
      expect(wrapper.find('input[name="userName"]').exists()).toBe(true)
      expect(wrapper.find('input[name="userPassword"]').exists()).toBe(true)
      expect(wrapper.find('input[type="submit"]').exists()).toBe(true)
    })

    it('should call AuthService.authenticate on submit', async () => {
      const authenticateMock = vi.spyOn(authService, 'authenticate')
      const userNameInput = wrapper.find('input[name="userName"]')
      const userPasswordInput = wrapper.find('input[name="userPassword"]')

      await userNameInput.setValue('my_user')
      await userPasswordInput.setValue('my_password')
      await wrapper.find('form').trigger('submit.prevent')

      expect(authenticateMock).toHaveBeenCalledWith(
        'my_user',
        'my_password',
        isOffLine
      )
    })
  })

  describe('When user is authenticated', () => {
    beforeEach(() => {
      const store = useUserManagerStore()
      store.$patch({
        currentUser: {
          login: 'my_connected_user',
          mail: 'my_connected_user_mail',
        },
      })
    })

    it('should render the login form', () => {
      expect(wrapper.find('form').exists()).toBe(false)
      const divs = wrapper.findAll('div')
      expect(divs.some(div => div.text().includes('my_connected_user'))).toBe(
        true
      )
      expect(
        divs.some(div => div.text().includes('my_connected_user_mail'))
      ).toBe(true)
    })

    it('should call AuthService.logout on logout', async () => {
      const logoutMock = vi.spyOn(authService, 'logout')

      await wrapper.find('button').trigger('click')

      expect(logoutMock).toHaveBeenCalled()
    })
  })
})
