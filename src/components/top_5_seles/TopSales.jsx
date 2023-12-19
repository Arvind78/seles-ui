import { Col, Container, Row, Table } from 'react-bootstrap';
import './TopSales.css'; // Import CSS file for styling

const TopSales = () => {
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
              <tr>
                <td className="font-size-cell"> 1 </td>
                <td className="font-size-cell"> S1212 </td>
                <td className="font-size-cell"> Laptop </td>
                <td className="font-size-cell"> 2 </td>
                <td className="font-size-cell"> 90000 </td>
              </tr>
              <tr>
                <td className="font-size-cell"> 2 </td>
                <td className="font-size-cell"> S1423 </td>
                <td className="font-size-cell"> Mobile </td>
                <td className="font-size-cell"> 5 </td>
                <td className="font-size-cell"> 85000 </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TopSales;
