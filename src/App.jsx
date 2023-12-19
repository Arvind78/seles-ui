import React from 'react'
import CustomNavbar from './components/navber/Navbar'
import { Routes ,Route } from 'react-router-dom'
import styles from "./App.module.css"
import Login from './components/login/login'
import Ragisterd from './components/ragisterd/ragisterd'
import AddSales from './components/add_sales/addSales'
import TopSales from './components/top_5_seles/TopSales'
import TodaySalesRevenue from './components/today_Sales_revenue/TodaySalesRevenue'
const App = () => {
  return (
    <div className={styles.cantainer}>
      <div className={styles.navber}>
        <CustomNavbar/>
      </div>
      <div  className={styles.routes} >
        <Routes>
          <Route path='/' element={<AddSales/>}/>
          <Route path='/revenue' element={<TodaySalesRevenue/>}/>
          <Route path='/topSales' element={<TopSales/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/ragister' element={<Ragisterd/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App