import React, { useState, useEffect, useRef } from "react";
let searchBox;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";


  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};


function handleScriptLoad(updateQuery, autoCompleteRef) {

  searchBox = new window.google.maps.places.SearchBox(
    autoCompleteRef.current,
  // specify location type below, in 'types' array
    { types: ["address"], componentRestrictions: { country: "us" } }
  );

  searchBox.getBounds(["address_components", "formatted_address"]);

  searchBox.addListener("places_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = searchBox.getPlaces();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

export function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyBxwntV6ATE5J6P2XobNF597RegYrTQex4&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-section">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Starting address"
        value={query}
        className='location-input'
        required
      />
    </div>
  );
}
//
// export function SearchLocationInput2() {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef2 = useRef(null);
//
//   useEffect(() => {
//     loadScript(
//         `https://maps.googleapis.com/maps/api/js?key=AIzaSyBxwntV6ATE5J6P2XobNF597RegYrTQex4&libraries=places`,
//         () => handleScriptLoad(setQuery, autoCompleteRef2)
//     );
//   }, []);
//
//   return (
//       <div className="search-location-section">
//         <input
//             ref={autoCompleteRef2}
//             onChange={event => setQuery(event.target.value)}
//             placeholder="Ending address"
//             value={query}
//             className='location-input'
//             required
//         />
//       </div>
//   );
// }

// export {
//   SearchLocationInput1,
//   SearchLocationInput2,
// }
