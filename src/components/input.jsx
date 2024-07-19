function Inputtext() {
  return (
    <>
      <h1 class="display-5">Ask to priti</h1>
      <div class="input-group textarea">
        <textarea
          class="form-control textarea"
          placeholder="Don't think just ask....."
          aria-label="With textarea"
        ></textarea>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Text"
          aria-label="Enter Text"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-primary" type="button" id="button-addon2">
          Submit
        </button>
      </div>
    </>
  );
}
export default Inputtext;
