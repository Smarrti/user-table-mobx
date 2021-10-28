import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { IUsers, Users } from './store/users'
import { Spinner } from './ui/spinner'
import { UserList } from './ui/userList'

export const App = observer(() => {
  const store: IUsers = new Users()

  store.getUsersFromApi()

  const loadMore = () => {
    const footer = document.querySelector('.footer')

    if (!footer) {
      return
    }

    if (footer.getBoundingClientRect().bottom <= window.innerHeight) {
      store.getUsersFromApi()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', loadMore)

    return () => {
      window.removeEventListener('scroll', loadMore)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <UserList store={store} />

      {store.isLoading && <Spinner />}
      <div className="footer" />
    </div>
  )
})
