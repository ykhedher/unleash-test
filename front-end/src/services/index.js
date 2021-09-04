export async function getData(text, setData) {
  if (!text) {
    setData([]);
  }
  if (text.length >= 3) {
    const respone = fetch(
      `http://localhost:5000/search/${encodeURIComponent(text)}`
    );
    respone
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }
}
