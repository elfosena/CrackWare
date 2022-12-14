import ProfileAction from "../components/common/ProfileAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import ToDoList from "../components/HomePage/ToDoList";
import Schedule from "../components/HomePage/Schedule";

const DUMMY_PROFILE = {
  role: "Student",
  image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
  id: "21901576",
  name: "Aslı",
  surname: "Karaman",
  department: "Computer Engineering",
  semester: 3,
};

function Student() {
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      mail: "cemg@hotmail.com",
      password: "123",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/student/home", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section>
      <Row>
        <Col xs={3} className="mx-3">
          <ProfileAction profile={DUMMY_PROFILE} />
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
