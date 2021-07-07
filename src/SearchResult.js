import { Link } from "react-router-dom";

export default function SearchResult(props) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Resume</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((result, index) => (
            <tr key={index}>
              <td>{result.author}</td>
              <td>{result.title}</td>
              <td>{result.resume}</td>
              <td>
                <Link to={"/posts/" + result._id.$oid}>Read more...</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="actions">
        <li>
          <Link to="/">Back To Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
