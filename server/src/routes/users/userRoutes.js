import * as validations from "../../validations";

export default (
    app,
    service,
    {validateRequest}
) => {
    app.get("/users/:page/:pageSize", async (req, res) => {
        try {
            const page = req.params.page? req.params.page: 1;
            const pageSize = req.params.pageSize? req.params.pageSize: 200;
            const _response = await service.getAllUsers(pageSize, page);
            return res.status(_response.status).send(_response.payload);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });
    app.post("/user", validateRequest(validations.createUserValidation) , async (req, res) => {
        try {
            const _response = await service.createUser(req.body);
            return res.status(_response.status).send(_response.payload);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });
};
