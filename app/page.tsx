import Header from "./components/Header";
import Form from "./components/Form";
import Legend from "./components/Legend";
import Footer from "./components/Footer";
import List from "./components/List";

export default async function Home() {
  const response = await fetch(
    "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  );
  const data = await response.json();

  return (
    <main>
      <Header />
      <Form total={data.total} />
      <Legend />
      <List data={data} />
      <Footer />
    </main>
  );
}
