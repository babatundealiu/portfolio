import Header from '../static/Header'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default WebLayout
