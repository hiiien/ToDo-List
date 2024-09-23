import { getToDos, createToDo, updateToDo, deleteToDo } from "../models/toDoModels.js";


export const listToDos = async (req, res) => {
    try {
        const toDos = await getToDos();
        // res.send(toDos);
        res.render("index.ejs", {
        toDos: toDos
        });
    } catch (error) {
        console.log(`Failed to list toDos ${error}`);
    };
};


// adds a toDo then calls listToDos to get updated list
export const addToDo = async (req, res) => {
    try {
        const content = req.body.content;
        const newToDo = await createToDo(content);
        console.log("toDo added Successfully");
        res.json({ toDo: newToDo}).status(200);
    } catch (error) {
        console.log(`Failed to add new toDo: ${error}`);
        res.status(500).send("Error adding toDo");
    };
};

export const changeToDo = async (req, res) => {
    try {
        const id = req.params.id * 1;
        const content = req.body.content;
        await updateToDo(id, content);
        console.log("toDo succesfully updated");
        res.status(200);
    } catch (error) {
        console.log(`failed to update toDo: ${error}`);
        res.status(500).send("Error updating toDo");
    }
}

export const removeToDo = async (req, res) => {
    try {
        const id = req.params.id * 1;
        await deleteToDo(id);
        console.log("ToDo deleted succesfully");
        res.status(200);
    } catch (error) {
        console.log(`failed to delete toDo: ${error}`);
        res.status(500).send("Error deleting toDo");
    }
}