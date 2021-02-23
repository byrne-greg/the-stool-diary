/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react"
import * as gatsby from "gatsby"
import { render, act } from "@testing-library/react"
import GlobalContextProvider from "../../../context/global/GlobalContextProvider"
import { updateAuthUser } from "../../../context/global/actions"
import { GlobalDispatchContext } from "../../../context/global/GlobalContextProvider"
import * as routeHook from "../route-hooks"
import ROUTES from "../../../utils/routes"

// mocks the gatsby api
jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby")

  return {
    ...gatsby,
    navigate: jest.fn(),
  }
})

const AuthUserHookTestComponent = ({ authUser = null }) => {
  return (
    <GlobalContextProvider>
      <AuthUserHookTestController authUser={authUser} />
    </GlobalContextProvider>
  )
}

const AuthUserHookTestController = ({ authUser }) => {
  const globalDispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    async function update() {
      await updateAuthUser(globalDispatch, authUser)
    }
    // only update if it's not null user
    if (authUser) {
      update()
    }
  })

  return <AuthUserHookUnderTest />
}

const AuthUserHookUnderTest = () => {
  routeHook.useAuthUserOnlyRoute()
  return <div />
}

describe("Auth User Only Redirect Hook", () => {
  let hookSpy
  beforeEach(() => {
    hookSpy = jest.spyOn(routeHook, "useAuthUserOnlyRoute")
  })
  afterEach(() => {
    hookSpy.mockRestore()
  })

  test("when unauthenticated and user navigates to component with auth user only access, then user is redirected to sign in page", () => {
    // ARRANGE
    gatsby.navigate = jest.fn()

    // ACT
    // single render - no update to the component
    render(<AuthUserHookTestComponent />)

    // ASSERT
    expect(hookSpy.mock.calls.length).toBe(1)
    expect(gatsby.navigate).toHaveBeenCalledWith(ROUTES.SIGN_IN)
  })

  test("when authenticated and user navigates to component with auth user only access, then user is not redirected", () => {
    // ARRANGE
    gatsby.navigate = jest.fn()

    // ACT
    // double render - one as default then another to update the internal context object
    act(() => {
      render(<AuthUserHookTestComponent authUser={{ dummyObj: true }} />)
    })

    // ASSERT
    // the first render will call navigate, but the second render won't as it will be updated with an authUser
    expect(hookSpy.mock.calls.length).toBe(2)
    expect(gatsby.navigate).toHaveBeenCalledTimes(1)
    expect(gatsby.navigate).toHaveBeenCalledWith(ROUTES.SIGN_IN)
  })
})

// -----

const AnonUserHookTestComponent = ({ authUser = null }) => {
  return (
    <GlobalContextProvider>
      <AnonUserHookTestController authUser={authUser} />
    </GlobalContextProvider>
  )
}

const AnonUserHookTestController = ({ authUser }) => {
  const globalDispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    async function update() {
      await updateAuthUser(globalDispatch, authUser)
    }
    // only update if it's not null user
    if (authUser) {
      update()
    }
  })

  return <AnonUserHookUnderTest />
}

const AnonUserHookUnderTest = () => {
  routeHook.useAnonymousUserOnlyRoute()
  return <div />
}

describe("Anon User Only Redirect Hook", () => {
  let hookSpy
  beforeEach(() => {
    hookSpy = jest.spyOn(routeHook, "useAnonymousUserOnlyRoute")
  })
  afterEach(() => {
    hookSpy.mockRestore()
  })

  test("when unauthenticated and user navigates to component with anon user only access, then user is not redirected", () => {
    // ARRANGE
    gatsby.navigate = jest.fn()

    // ACT
    // single render - no update to the component
    render(<AnonUserHookTestComponent />)

    // ASSERT
    expect(hookSpy.mock.calls.length).toBe(1)
    expect(gatsby.navigate).not.toHaveBeenCalled()
  })

  test("when authenticated and user navigates to component with anon user only access, then user is redirected to home page", () => {
    // ARRANGE
    gatsby.navigate = jest.fn()

    // ACT
    // double render - one as default then another to update the internal context object
    act(() => {
      render(<AnonUserHookTestComponent authUser={{ dummyObj: true }} />)
    })

    // ASSERT
    // the first render will call navigate, but the second render won't as it will be updated with an authUser
    expect(hookSpy.mock.calls.length).toBe(2)
    expect(gatsby.navigate).toHaveBeenCalledTimes(1)
    expect(gatsby.navigate).toHaveBeenCalledWith(ROUTES.HOME)
  })
})
