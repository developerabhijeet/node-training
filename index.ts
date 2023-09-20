import http from "http";

export const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "GET Works!",
      })
    );
  } else if (req.url === "/api" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "POST Works!",
      })
    );
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
