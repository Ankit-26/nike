import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollRouter({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Use the location to extract the fragment identifier (the #id from the URL).
    const { hash } = location;

    if (hash) {
      // Remove the # symbol from the hash.
      const id = hash.slice(1);

      // Find the element with the specified id.
      const element = document.getElementById(id);

      if (element) {
        // Scroll to the element using the `scrollIntoView` method.
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    } else {
      window.scroll({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);
  return <>{children}</>;
}

export default ScrollRouter;
