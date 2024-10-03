import http from "http";
import { parse } from "url";

// Tạo server
const server = http.createServer((req, res) => {
  // Thêm header CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = parse(req.url, true); // Sử dụng parse từ module url

  if (parsedUrl.pathname === "/signin") {
    const { user, password } = parsedUrl.query;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (user && password) {
      res.end(
        JSON.stringify({
          message: "Sign-in successful",
          token: "Djuydeptrai123",
        })
      );
    } else {
      res.end(JSON.stringify({ message: "Missing user or password" }));
    }
  } else if (req.method === "GET" && parsedUrl.pathname === "/user") {
    const authHeader = req.headers["authorization"];
    console.log(req.headers);

    // Kiểm tra token Authorization
    if (!authHeader || !authHeader.startsWith("bearer ")) {
      res.statusCode = 401;
      res.end(
        JSON.stringify({
          message: "Unauthorized: No or invalid token provided",
        })
      );
      return;
    }

    const token = authHeader.split(" ")[1]; // Lấy token từ header Authorization

    // Kiểm tra token (giả sử token "token123" là hợp lệ cho ví dụ này)
    if (token === "Djuydeptrai123") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          user: {
            id: 69,
            username: "admin",
            email: "admin@example.com",
            age: 30,
            phone_number: "123-456-7890",
            avatar: "https://example.com/avatar.jpg",
          },
        })
      );
    } else {
      res.statusCode = 403;
      res.end(JSON.stringify({ message: "Forbidden: Invalid token" }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

// Chạy server trên cổng 8000
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
