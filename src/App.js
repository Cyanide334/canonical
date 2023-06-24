import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row u-equal-height" style={{marginTop: '10px'}}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;