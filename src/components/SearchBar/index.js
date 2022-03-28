// function Components named Searchbar, has no props
const Search = () => {
    return (
      <form className="formSearch">
        <div className="form-group">
        <input type="text" name="query" placeholder="Search gif..." required />
        <input type="submit" id="btnSearch" value="Search" />
        </div>
      </form>
    );
  };
  
  export default Search;

  // const Search = (props) => {
  //   return (
  //     <form onSubmit={props.handleSubmit} className="formSearch">
  //       <div className="form-group">
  //         <input type="text" name="query" placeholder="Search gif..." required />
  //         <input type="submit" id="btnSearch" value="Search" />
  //       </div>
  //     </form>
  //   );
  // };
  
  // export default Search;