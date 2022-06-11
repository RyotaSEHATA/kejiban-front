import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
    // get user from database then:
    req.session.user = {
        u_id: 12345,
        u_name: "山田 太朗",
    };
    await req.session.save();
    res.send("Logged in");
}