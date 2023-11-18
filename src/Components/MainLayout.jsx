const MainLayout = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="d-flex flex-column justify-content-center align-items-center border border-primary p-4">
        <h1>How is the Weather in</h1>
        <input class="form-control text-center mb-2" type="text" />
        <button class="btn btn-primary">Go</button>
      </div>
    </div>
  );
};

export default MainLayout;
