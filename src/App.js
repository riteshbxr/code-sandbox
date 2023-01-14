import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Blackout Period!</h2>
      <p>
        A user wants to schedule emails based on a regular interval, say 100
        emails every hour from a big list of 10K Emails. But he doesn't want to
        send them at night. One of the teams in tech has implemented the
        scheduler but forgot to implement this blackout. Your task would be to
        create a function which takes three parameters startTime, endTime and
        current Time, And returns true or false based on If current time lies in
        the blackout period. some examples{" "}
      </p>
< table width="100%" border="1">
  <tr>
    <th>startTime</th>
    <th>endTime</th>
    <th>currentTime</th>
  </tr>
  <tr>
    <td>22:00</td>
    <td>18:00</td>
    <td>23:00</td>
    <td>True</td>
  </tr>
  <tr>
    <td>18:00</td>
    <td>22:00</td>
    <td>23:00</td>
    <td>False</td>
  </tr>
  <tr>
    <td>18:00</td>
    <td>22:00</td>
    <td>231:00</td>
    <td>True</td>
  </tr>
</table>

      <strong>some assumptions</strong>
      <ol>
        <li>
          Time can only be expressed in HH:MM and Seconds would not be
          considered.
        </li>
        <li>
          There is no Date parameter, So if it starts with 18 and ends with 9.
          Then 9 is actually 9 am for the next date.
        </li>
      </ol>
    </div>
  );
}
