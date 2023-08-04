import "./App.css";
import { connect } from "react-redux";
import { addAlbums } from "./album.actions";
import { Audio } from "react-loader-spinner";
function App({ data, addAlbums, isFetching }) {
  return (
    <div className="App">
      <button type="button" onClick={() => addAlbums()}>
        Click me to Add
      </button>
      {isFetching ? <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass /> : <p>no</p>}
      {data && data.length ? data.map((eachData) => <p key={eachData.id}>{eachData.name}</p>) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addAlbums: () => dispatch(addAlbums()),
});

const mapStateToProps = (state) => ({
  data: state.albums,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
