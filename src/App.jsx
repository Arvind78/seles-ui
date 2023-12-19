// Importing  component
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
    // Main container for the entire app
    <div className={styles.container}>
      
      {/* Navigation bar section */}
      <div className={styles.navbar}>
        <CustomNavbar />
      </div>

      {/* Routes section using React Router */}
      <div className={styles.routes}>
        <Routes>
          {/* Route for AddSales component */}
          <Route path='/' element={<AddSales />} />

          {/* Route for TodaySalesRevenue component */}
          <Route path='/revenue' element={<TodaySalesRevenue />} />

          {/* Route for TopSales component */}
          <Route path='/topSales' element={<TopSales />} />

          {/* Route for Login component */}
          <Route path='/login' element={<Login />} />

          {/* Route for Register component */}
          <Route path='/register' element={<Ragisterd />} />
        </Routes>
      </div> 
    </div>
  );
}

export default App;



