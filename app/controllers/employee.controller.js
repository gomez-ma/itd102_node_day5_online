const db = require("../models");
const Employee = db.employee;
const Setting = db.setting;

exports.findAllEmployee = (req, res) => {
    try {
        Employee.findAll({
            include: [
                {
                    model: Setting,
                    attributes: ["theme"]
                }
            ]
        })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (error) {
        console.log(error);
    }
};

exports.insertEmployee = (req, res) => {
    try {
        if (!req.body.name || !req.body.position) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }
        const newEmployee = {
            name: req.body.name,
            position: req.body.position
        };

        Employee.create(newEmployee)
            .then(data => {
                Setting.create({
                    theme: req.body.theme,
                    employeeId: data.id
                });

                res.status(200).json({ message: "Employee created." });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        console.log(error);
    }
};