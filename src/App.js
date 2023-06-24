import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
    return axios.get(url).then((res) => setData(res.data))
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-4 col-medium-3">
          <Card data={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
