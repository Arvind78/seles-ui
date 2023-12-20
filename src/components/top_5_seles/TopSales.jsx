import { Col, Container, Row, Table } from 'react-bootstrap';
import './TopSales.css'; // Import CSS file for styling
import axios from "axios"
import { useEffect, useState } from 'react';

const TopSales = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios("http://localhost:8080/api/products").then((res) => {
      setData(res.data.sales)
    }).catch((err)=>{throw err})
  },[])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Table striped bordered hover responsive="sm" className="font-size-table">
            <thead>
              <tr>
                <th className="font-size-cell"> # </th>
                <th className="font-size-cell"> Sales Id </th>
                <th className="font-size-cell"> Product Name </th>
                <th className="font-size-cell"> Quantity </th>
                <th className="font-size-cell"> Sale Amount </th>
              </tr>
            </thead>
            <tbody>

              { 
              data.map((sales,index)=>(

              <tr key={index}>
                <td className="font-size-cell"> {index+1}</td>
                <td className="font-size-cell">{sales.salesId} </td>
                <td className="font-size-cell"> {sales.productName} </td>
                <td className="font-size-cell"> {sales.quantity}</td>
                <td className="font-size-cell"> {sales.amount} </td>
              </tr>

              ))
}

              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TopSales;
