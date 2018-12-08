class Route {
    constructor(resource, app, model) {
        this.resource = resource;
        this.app = app;
        this.model = model;
    }

    findAll() {
        this.app.get(`/api/${this.resource}`, (req, res) => {
            this.model.findAll({})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
        });
    }

    find(identifier) {
        this.app.get(`/api/${this.resource}/:${identifier}`, (req, res) => {
            this.model.findAll({
                where: {
                    [identifier]: req.params[identifier]
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
        });
    }

    create() {
        this.app.post(`/api/${this.resource}`, (req, res) => {
            this.model.create(req.body)
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
        });
    }

    update(identifier) {
        this.app.put(`/api/${this.resource}/:${identifier}`, (req, res) => {
            //console.log(req.body);
            this.model.update(req.body, {
                where: {
                    [identifier]: req.params[identifier]
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
        });
    }

    delete(identifier) {
        this.app.delete(`/app/${this.resource}/:${identifier}`, (req, res) => {
            this.model.destroy({
                where: {
                    [identifier]: req.params[identifier]
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
        });
    }
}

module.exports = Route;