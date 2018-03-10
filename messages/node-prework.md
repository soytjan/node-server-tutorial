* What type of information is included in the header of a request?
  - Allow the client and the server to pass additional information with the request or the response.
  - case-insensitive name followed by ':' then by its value
  - Request header: Headers containing more information about the resource to be fetched or about the client itself
* What are the major RESTful methods and what do each of them do?
  - POST: 'create' new resources
  - GET: 'read' or retreive a representation of a resource
  - PUT: 'update' capabilites with the request body containing the newly-updated representation of the original resource
  - PATCH: 'modify' capabilites, only needs to contain the changes to the resource, not the complete resource
  - DELETE: delete
* What is Node?
  - JavaScript runtime built on Chrome's V8 JavaScript engine
  - Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.
  - Node.js wastes no time or resources on waiting for I/O requests to return