// // function Components named Searchbar, has no props
// const Search = () => {
//     return (
//       <form className="formSearch">
//         <div className="form-group">
//         <input type="text" name="query" placeholder="Search gif..." required />
//         <input type="submit" id="btnSearch" value="Search" />
//         </div>
//       </form>
//     );
//   };
  
//   export default Search;

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

  import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../searchSlice";
import { getImages } from "../../utils/fetchApi";

export default function SearchBar({ onSuccess }) {
    const query = useSelector((state) => state.search.query);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    const handleChange = async (e) => {
        dispatch(setQuery(e.target.value));

        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    const clearSearch = () => {
        dispatch(setQuery(""));
        onSuccess([]);
    };

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit} className="form-search">
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        type="text"
                        value={query}
                        placeholder="Search gif..."
                        required
                    />
                    <button type="submit" className="btn-primary">
                        Search
                    </button>
                </div>
            </form>
            <button className="btn btn-text" onClick={clearSearch}>
                Clear Search
            </button>
        </div>
    );
}