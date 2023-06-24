import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data))
  }, []);

  return (
    <div className="row " style={{marginTop: '10px'}}>
      {data.map((item) => (
        <div key={item.id} className="col-4 col-medium-3 row">
          <Card data={item} />
        </div>
      ))}
    </div>
  );
}

export default App;