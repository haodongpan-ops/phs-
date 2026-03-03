import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API route to download the single HTML file
  app.get("/api/download-html", async (req, res) => {
    try {
      console.log("Building single HTML file...");
      await execPromise("npx vite build");
      const htmlPath = path.resolve(process.cwd(), "dist/index.html");
      if (fs.existsSync(htmlPath)) {
        res.download(htmlPath, "PowerAcuity_Website.html");
      } else {
        res.status(500).send("Build failed: HTML file not found.");
      }
    } catch (error) {
      console.error("Build error:", error);
      res.status(500).send("Error building the HTML file.");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
