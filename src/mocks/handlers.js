import { rest } from "msw";
import { mockedDB } from "./db";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    // sessionStorage.setItem("is-authenticated", "true");
    const data = JSON.parse(req.body);
    const [user] = mockedDB.filter((user) => {
      if (
        Object.keys(user)[0] === data.username &&
        Object.values(user)[0] === data.password
      ) {
        return true;
      }

      return false;
    });

    if (user) {
      return res(
        // Respond with a 200 status code
        ctx.status(200)
      );
    } else {
      return res(
        // Send a valid HTTP status code
        ctx.status(404),
        // And a response body, if necessary
        ctx.json({
          errorMessage: `Invalid credentials.`,
        })
      );
    }
  }),
];
