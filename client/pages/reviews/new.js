import { useState } from 'react';


function timer(time, domain) {
  var timer = setInterval(function () {
    if (time <= 0) {
      clearInterval(timer);
      document.location = domain;
    } else {
      time--;
    }
  }, time)
}

const parseJSON = resp => (resp.json ? resp.json() : resp);
const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then(resp => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};

const CreateReview = ({ portfolio, global }) => {
  const uuidData = portfolio.data.map(({ attributes: { uuid }, ...item }) => (uuid));


  const [modifiedData, setModifiedData] = useState({
    code: '',
    name: '',
    organization: ``,
    communication: ``,
    text: '',
    onHomepage: false,
    publishedAt: null
  });

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async e => {
    const uuidInclude = uuidData.includes(`${modifiedData.code}`);
    if (uuidInclude) {
      e.preventDefault();

      try {
        const response = await fetch('http://localhost:1337/api/reviews', {
          method: 'POST',
          headers,
          body: JSON.stringify({ data: modifiedData }),
        })
          .then(checkStatus)
          .then(parseJSON);
      } catch (error) {
        setErrorRestaurants(error);
      }
      timer(5, "/reviews/success");
    }
    else{
      alert(`Такой код не существует`)
    }
  };

  return (
    <div style={{ marginLeft: `50px` }}>
      <form onSubmit={handleSubmit}>
        <h3>Test form</h3>
        <br />
        <label>
          Code:<br></br><br></br>
          <input type="text" name="code" value={modifiedData.code} onChange={handleChange} required />
        </label><br></br><br></br><br></br>
        <label>
          Name:<br></br><br></br>
          <input type="text" name="name" value={modifiedData.name} onChange={handleChange} required />
        </label><br></br><br></br><br></br>
        <label>
          Organization:<br></br><br></br>
          <input type="text" name="organization" value={modifiedData.organization} onChange={handleChange} />
        </label><br></br><br></br><br></br>
        <label>
          text:<br></br><br></br>
          <textarea
            style={{ resize: `none` }}
            required

            rows="10" cols="45"
            type="text"
            name="text"
            value={modifiedData.text}
            onChange={handleChange}
          />
        </label><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export const getStaticProps = async () => {
  const [res1, res2,] = await Promise.all([
    fetch(`http://localhost:1337/api/global?populate=*`),
    fetch(`http://localhost:1337/api/portfolio?fields[0]=uuid`),
  ]);

  const [data1, data2,] = await Promise.all([
    res1.json(),
    res2.json()
  ])

  return {
    props: { global: data1, portfolio: data2 },
  }

};

export default CreateReview;