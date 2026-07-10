const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("==================================");
    console.log("🚀 AnalytIQ ProposalAI Server");
    console.log(`🌐 Running on http://localhost:${PORT}`);
    console.log("==================================");
});