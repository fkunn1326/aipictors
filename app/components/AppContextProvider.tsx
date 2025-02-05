import { setUser } from "@sentry/react"
import {
  getAnalytics,
  logEvent,
  setUserId,
  setUserProperties,
} from "firebase/analytics"
import {
  getAuth,
  onAuthStateChanged,
  getIdTokenResult,
  type ParsedToken,
  type User,
} from "firebase/auth"
import { useEffect, useState } from "react"
import { AppContext } from "app/contexts/appContext"
import { Config } from "config"

type Props = {
  children: React.ReactNode
}

type Claims = ParsedToken

export const AppContextProvider: React.FC<Props> = (props) => {
  const [isLoading, setLoadingState] = useState(() => {
    return true
  })

  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const [claims, setClaims] = useState<Claims | null>(null)

  const refresh = async () => {
    const currentUser = getAuth().currentUser
    if (currentUser === null) {
      setCurrentUser(null)
      setClaims(null)
      return
    }
    getIdTokenResult(currentUser, true).then((result) => {
      setCurrentUser(currentUser)
      setClaims({ ...result.claims })
    })
  }

  useEffect(() => {
    if (Config.isNotClient) return
    onAuthStateChanged(getAuth(), (user) => {
      setUserId(getAnalytics(), user?.uid ?? null)
      if (user === null) {
        setCurrentUser(null)
        setClaims(null)
        setLoadingState(false)
        return
      }
      logEvent(getAnalytics(), "login", { method: user.providerId })
      getIdTokenResult(user, true).then((result) => {
        setUser({
          id: user.uid,
          username: user.uid,
          email: user.email ?? undefined,
          display_name: user.displayName,
          provider_id: user.providerId,
        })
        setUserProperties(getAnalytics(), {
          display_name: user.displayName,
          provider_id: user.providerId,
          username: result.claims.username,
        })
        setCurrentUser(user)
        setClaims({ ...result.claims })
        setLoadingState(false)
      })
    })
  }, [])

  // 読み込み中
  if (isLoading) {
    const value = {
      isLoading: true,
      isNotLoading: false,
      isLoggedIn: false,
      isNotLoggedIn: false,
      currentUser: null,
      userId: null,
      refresh: refresh,
    } as const
    return (
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
  }

  // 未ログイン
  if (
    currentUser === null ||
    claims === null ||
    typeof claims.userId !== "string"
  ) {
    const value = {
      isLoading: false,
      isNotLoading: true,
      isLoggedIn: false,
      isNotLoggedIn: true,
      currentUser: null,
      userId: null,
      refresh: refresh,
    } as const
    return (
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
  }

  const value = {
    isLoading: false,
    isNotLoading: true,
    isLoggedIn: true,
    isNotLoggedIn: false,
    currentUser: currentUser,
    userId: claims.userId,
    refresh: refresh,
  } as const

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}
