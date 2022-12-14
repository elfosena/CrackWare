import ProfileAction from "../components/common/ProfileAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Schedule from "../components/HomePage/Schedule";

function Student() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    async function getData() {
      return await fetch(
        "http://localhost:8080/student/home",
        requestOptions
      ).then((response) =>
        response.json().then((parsedJson) => {
          return parsedJson;
        })
      );
    }
    setProfile(getData());
  }, []);

  console.log(profile);
  return (
    <section>
      <Row>
        <Col xs={3} className="mx-3">
          <ProfileAction profile={profile} />
        </Col>
        <Col className="mx-4">
          <div>
            <Row className="my-3">
              <Schedule />
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}
export default Student;
