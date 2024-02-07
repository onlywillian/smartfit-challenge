import Header from "./components/Header";
import Form from "./components/Form";
import Legend from "./components/Legend";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <Form />
      <Legend />
      <Footer />
    </main>
  );
}
