import Form from "./Form"
import Notes from "./Notes";

const Home = () => {

  return (
    <div>
      <div className="container my-5">
        <h2>|Add your notes </h2>
      <Form/>
      </div>

      <hr />

      <div className="container my-5">
        <h2 className="my-4">|All your notes</h2>
        <Notes/>
      </div>
    </div>
  );
};

export default Home;
