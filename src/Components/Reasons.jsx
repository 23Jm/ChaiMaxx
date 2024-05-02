import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import reason1 from "../utils/ajithsir/lowrisk.jpg"
import reason2 from "../utils/ajithsir/highestroi.jpg"
import reason3 from "../utils/ajithsir/uniqueblending.jpg"
import reason4 from "../utils/ajithsir/erperm.jpg"
import reason5 from "../utils/ajithsir/marketing support.jpg"
import reason6 from "../utils/ajithsir/qualityaudit.jpg"
import reason7 from "../utils/ajithsir/biggestsupplychain.jpg"
import reason8 from "../utils/ajithsir/uniquesellingpoint.jpg"
import reason9 from "../utils/ajithsir/corporatecollaborate.jpg"
import reason10 from "../utils/ajithsir/franchisedevsupport.jpg";
import "../index.css"

function Reasons() {
    const details = [
      {
        idx: 1,
        title: "Low Risk , Low Investment",
        text: "Good",
        img: reason1,
      },
      {
        idx: 2,
        title: "Highest ROI",
        text: "Good",
        img: reason2,
      },
      {
        idx: 3,
        title: "Unique Blending Taste",
        text: "Good",
        img: reason3,
      },
      {
        idx: 4,
        title: "ERP & ERM - Support",
        text: "Good",
        img: reason4,
      },
      {
        idx: 5,
        title: "Marketing Support",
        text: "Good",
        img: reason5,
      },
      {
        idx: 6,
        title: "Quality Audit, Inventory Audit",
        text: "Good",
        img: reason6,
      },
      {
        idx: 7,
        title: "Biggest Supply Chain Management",
        text: "Good",
        img:reason7,
      },
      {
        idx: 8,
        title: "Unique Selling Point",
        text: "Good",
        img: reason8,
      },
      {
        idx: 9,
        title: "Corporate & Collaboration Orders",
        text: "Good",
        img: reason9,
      },
      {
        idx: 10,
        title: "Franchise Development Support",
        text: "Good",
        img: reason10,
      },
    ];
  return (
    <div className="container" id="Reasons">
      <Row xs={1} sm={2} md={3} lg={5} className="g-5 mx-5 mx-sm-0 d-flex justify-content-center">
        {details.map((detail) => (
          <Col key={detail.idx} id="ReasonsCol">
            <Card className="border-0 h-100 " id="ReasonColCard">
              <Card.Img variant="top" src={detail.img} className="border-0" />
              <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Reasons;
