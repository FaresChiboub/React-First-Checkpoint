import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./index.css";
function MyCards() {
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";
  const logoUrl2 =
    "https://addissoftware.com/wp-content/uploads/2022/08/1_d65O8XWZwoWbIsIH9a5jzA.png";
  const logoUrl3 =
    "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1309394/regular_1708x683_1014_Engineering_React_Memoization_Blog_draft_1-7cf89ee959d25e6a4e68dc2b402e9b14.png";

  return (
    <CardGroup>
      <Card
        style={{
          marginTop: "50px",
          borderRight: "1px dotted",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Card.Img
          variant="top"
          src={logoUrl2}
          style={{
            width: "300px",
            height: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "10px 50px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Card One</Card.Title>
          <Card.Text style={{ color: "lightgreen", textAlign: "center" }}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card
        style={{
          marginTop: "50px",
          borderRight: "1px dotted",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Card.Img
          variant="top"
          src={logoUrl}
          style={{
            width: "180px",
            height: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "20px 102px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Card Two</Card.Title>
          <Card.Text style={{ color: "red", textAlign: "center" }}>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card
        style={{ marginTop: "50px", backgroundColor: "black", color: "white" }}
      >
        <Card.Img
          variant="top"
          src={logoUrl3}
          style={{
            width: "300px",
            height: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "10px 40px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Card Three</Card.Title>
          <Card.Text style={{ color: "cyan", textAlign: "center" }}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default MyCards;
