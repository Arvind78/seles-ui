// Importing  component
import CustomNavbar from './components/navber/Navbar'
import { Routes, Route } from 'react-router-dom'
import styles from "./App.module.css"
import Login from './components/login/login'
import Ragisterd from './components/ragisterd/ragisterd'
import AddSales from './components/add_sales/addSales'
import TopSales from './components/top_5_seles/TopSales'
import TodaySalesRevenue from './components/today_Sales_revenue/TodaySalesRevenue'
import NotFoundPage from './components/404/NotFoundPage'

const App = () => {
  const token = localStorage.getItem("selesToken");

  return (
    // Main container for the entire app
    <div className={styles.container}>

      {/* Navigation bar section */}
      <div className={styles.navbar}>
        <CustomNavbar />
      </div>

      {/* Routes section using React Router */}
      <div className={styles.routes}>

        <Routes>
          {token &&
            <>
              <Route path='/' element={<AddSales />} />
              <Route path='/revenue' element={<TodaySalesRevenue />} />
              <Route path='/topSales' element={<TopSales />} />
            </>
          }

          <Route path='/login' element={<Login />} />
          <Route path='/ragister' element={<Ragisterd />} />
          <Route path='*' element={<NotFoundPage unthozarized={!token ? "Unthozarized User" : "404 - Not Found" } />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;



