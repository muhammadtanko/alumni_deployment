const setModel = require("../models/sets.model")


class ClassController {
    constructor() {
        // for seeding sets from 1989 to date.
        // this.#init()
    }

    async registerClass(obj) {
        try {
            const newClass = setModel(obj);
            const result = await newClass.save();
            return { ok: true, data: result }
        } catch (error) {
            return { ok: false, message: error.message };
        }
    }

    async getClasses() {
        try {
            const classes = await setModel.find();
            return { ok: true, data: classes }
        } catch (error) {
            return { ok: false, message: error.message };
        }

    }

    async getClass(id) {
        try {
            const singleClass = await setModel.findById(id);
            if (!singleClass) {
                return { ok: false, message: "Class not found" };
            }
            return { ok: true, data: singleClass }
        } catch (error) {
            return { ok: false, message: error.message };
        }

    }

    async getClassByRep(yearOfGraduation) {
        try {
            const singleClass = await setModel.findOne({ yearOfGraduation });
            return { ok: true, data: singleClass }
        } catch (error) {
            return { ok: false, message: error.message };
        }

    }

    async updateClass(id, updateData) {
        try {
            const updatedClass = await setModel.findByIdAndUpdate(id, { $set: updateData });
            if (!chapter) {
                return { ok: false, message: "Class not found" };
            }
            return { ok: true, data: updatedClass }
        } catch (error) {
            return { ok: false, message: error.message };
        }

    }

    async deleteClass(id) {
        try {
            const deletedClass = await setModel.findByIdAndDelete(id);
            return { ok: true, data: "deleted" }
        } catch (error) {
            return { ok: false, message: error.message };
        }

    }

    async #init() {
        try {
            const currentYear = new Date().getFullYear();
            const classes = [];

            const test = await setModel.findOne({ yearOfGraduation: "2000" });
            if (test) {
                console.log("data already present");
            } else {
                console.log("saving classes to db")
                for (let year = 1989; year <= currentYear; year++) {
                    const classData = { yearOfGraduation: year };
                    const newClass = await setModel.create(classData);
                    classes.push(newClass);
                    console.log(">>", newClass);
                }
                return console.log("finished");
            }
        } catch (error) {
            console.log(error);
        }
    };

}


module.exports = new ClassController();