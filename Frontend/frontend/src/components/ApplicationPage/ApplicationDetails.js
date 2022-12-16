import { formatPhoneNumberIntl } from "react-phone-number-input";
import Form from "react-bootstrap/Form";
import Card from "../UI/Card";
import Table from "react-bootstrap/Table";
import classes from "./ApplicationForm.module.css";

const timePeriod = {
  1: "Fall Semester",
  2: "Spring Semester",
  3: "Fall & Spring Semester",
};
const ApplicationDetails = ({
  mail,
  address,
  phoneNumber,
  term,
  first,
  second,
  third,
  fourth,
  fifth,
  status,
  cv,
}) => {
  var phoneNumberFormatted = formatPhoneNumberIntl("+" + phoneNumber);
  return (
    <Card>
      <Form className="form">
        <h3 className={classes.heading}>Application</h3>
        <hr />
        <h6>Contact Information</h6>
        <hr className={classes.simple} />
        <Table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>{mail}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{phoneNumberFormatted}</td>
            </tr>
          </tbody>
        </Table>
        <h6>Status</h6>
        <hr className={classes.simple} />
        <Table>
          <tbody>
            <tr>
              <td>Status</td>
              <td>{status}</td>
            </tr>
          </tbody>
        </Table>
        <h6>Erasmus Preferences</h6>
        <hr className={classes.simple} />
        <Table>
          <tbody>
            <tr>
              <td>Status</td>
              <td>{status}</td>
            </tr>
            <tr>
              <td>Time Period</td>
              <td>{timePeriod[term]}</td>
            </tr>
            <tr>
              <td>1st Preference</td>
              <td>{first}</td>
            </tr>
            <tr>
              <td>2nd Preference</td>
              <td>{second}</td>
            </tr>
            <tr>
              <td>3rd Preference</td>
              <td>{third}</td>
            </tr>
            <tr>
              <td>4th Preference</td>
              <td>{fourth}</td>
            </tr>
            <tr>
              <td>5th Preference</td>
              <td>{fifth}</td>
            </tr>
            <tr>
              <td>CV</td>
              <td>{cv}</td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </Card>
  );
};
export default ApplicationDetails;
