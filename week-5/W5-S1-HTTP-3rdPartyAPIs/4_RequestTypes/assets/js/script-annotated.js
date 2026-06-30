/**
 * ==========================================
 * METHOD 1: Fetch API (Modern, Native)
 * ==========================================
 * PROS: Built natively into modern browsers. No external weight or CDNs required. 
 * Returns clean Promises.
 * CONS: Does not automatically throw errors on 404/500 statuses (you must manually 
 * check response.ok). Requires a two-step process to extract the payload body.
 */
function sendFetchRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Fetch quirk: bad status codes (like 404) do NOT trigger .catch(). 
      // You must handle them manually:
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Step 2: Unpack stream payload to JSON
    })
    .then((data) => console.log("Fetch API (Parsed Data):", data))
    .catch((error) => console.error("Fetch error caught:", error));
}

/**
 * ==========================================
 * METHOD 2: Axios (Modern, Third-Party Library)
 * ==========================================
 * PROS: Automatically transforms JSON data. Automatically throws errors on non-2xx 
 * status codes. Supports robust features like request interceptors and cancellation.
 * CONS: Third-party dependency. Increases your application's bundle size.
 */
function sendAxiosRequest() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Axios automatically parses JSON and places it inside the `.data` property
      console.log("Axios (response.data):", response.data);
    })
    .catch((error) => {
      // Catch handles both network errors AND 4xx/5xx responses automatically
      console.error("Axios error caught:", error.message);
    });
}

/**
 * ==========================================
 * METHOD 3: jQuery AJAX (Legacy, Wrapper)
 * ==========================================
 * PROS: Simple, clean syntax for its time. Excellent cross-browser normalization 
 * for legacy browsers (like Internet Explorer).
 * CONS: Requires loading the heavy jQuery library. Uses older callback paradigms 
 * (`success`/`error`) instead of native ES6 promises out of the box.
 */
function sendAjaXRequest() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    dataType: "json", // Instructs jQuery to pre-parse the response as JSON
    success: function (data) {
      console.log("jQuery.ajax (Parsed Data):", data);
    },
    error: function (xhr, status, error) {
      console.error("jQuery error caught:", error);
    },
  });
}

/**
 * ==========================================
 * METHOD 4: XMLHttpRequest / XHR (Legacy, Native)
 * ==========================================
 * PROS: Native to browsers, zero dependencies. Still useful under the hood for 
 * tracking granular progress metrics (like upload percentages).
 * CONS: Highly verbose and complicated event handling. Callback-heavy logic 
 * ("callback hell"). Returns raw data as a string that must be manually parsed.
 */
function sendXHRRequest() {
  const xhr = new XMLHttpRequest();
  
  // Initialize the request configuration
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  
  // Event handler called whenever the request completes
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // XHR returns a plaintext string. We must parse via JSON.parse manually
      const parsedData = JSON.parse(xhr.responseText);
      console.log("XHR (Manually Parsed String):", parsedData);
    } else {
      console.error("XHR HTTP Status Error Code:", xhr.status);
    }
  };

  // Event handler called when a network-level connection error occurs
  xhr.onerror = function () {
    console.error("XHR Network connection failed entirely.");
  };

  // Send the request down the wire
  xhr.send();
}

// Event listeners to connect functions to the UI
document.getElementById("fetch").addEventListener("click", sendFetchRequest);
document.getElementById("axios").addEventListener("click", sendAxiosRequest);
document.getElementById("ajax").addEventListener("click", sendAjaXRequest);
document.getElementById("xhr").addEventListener("click", sendXHRRequest);