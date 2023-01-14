import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>
        Create a contact management API service
      </h2>
      <p>
        A contact is a real world person, with or without an email id. The
        contact can also have arbitrary properties. The aim of this excersize is
        to help a platfomr save a list of contacts of their client which they
        can use for future segemnetation, marking and other stuff.
      </p>
      <p>
        We need to be aware of the Spammers and so, we need to put some rate
        limits. To make it easy we generally accept any data and allow clients
        to update them at later stage or merge it another contact. And we need
        to trace all the changes in the data as well. Anything not specified
        below can be assumed to solve the problem.
      </p>
      <p>
        You need the Show a running code where data can be added/updaed/merged
        and filters to output as json from Postman. Its Ok to keep data in
        memory if it speeds up the development process. Keep in mind that you
        only have 30-40 minutes (max) to show your approach and a working
        application <br />
        <br />
        <b>Primary identification key</b>: Email id, if present, User can
        provide the contact_id, Otherwise the contact is assigned an auto
        generated contact_id
      </p>

      <strong>Create the following api</strong>
      <ol>
        <li>Add or update contact</li>
        <li>Merge contacts on the basis primary identification</li>
        <li>Update email id on the basis of contact_id</li>
        <li>Filter contacts on the basis of properties</li>
      </ol>
      <strong>Additionally</strong>
      <ol>
        <li>Keep an audit log of add/update/merge action </li>
        <li>
          Add a rate limiter on add update operation for 2 requests /10 seconds
        </li>
      </ol>
    </div>
  );
}
