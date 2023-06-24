import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>get rickrolled</div>; // Display a loading state while fetching data, im too lazy to import a react loader sorry ;-;
  }

  if (error) {
    return <div>you screwed up mate: {error.message}</div>; // Display an error message if fetching fails
  }

  return (
    <div className="row u-equal-height" style={{ marginTop: '10px' }}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default App;