import { Link } from 'react-router-dom';
export default function Home(params) {
  return (
    <div class="container">
      <h1 class="title">Home</h1>
      <div>
        <Link to="/todo">ToDo</Link>
      </div>
      <div>
        <Link to="/coin">CoinTracker</Link>
      </div>
      <div>
        <Link to="/movie">Movie</Link>
      </div>
    </div>
  );
}
