import { GeotabApi } from "adv-mg-api-js";
const api = new GeotabApi({
    credentials: {
        userName: "asdfas",
        database: "asdfsad",
        password: "asdfasd",
    },
});
async function run() {
    await api.authenticate();
    const logRecord = await api.call("Get", {
        typeName: "LogRecord",
        resultsLimit: 10,
    });
}
run();
//# sourceMappingURL=main.js.map