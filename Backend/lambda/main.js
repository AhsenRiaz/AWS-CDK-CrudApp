"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTodo_1 = require("./addTodo");
const deleteTodo_1 = require("./deleteTodo");
const getTodos_1 = require("./getTodos");
const updateTodo_1 = require("./updateTodo");
exports.handler = async (event) => {
    switch (event.info.fieldName) {
        case "addTodo":
            return await addTodo_1.default(event.arguments.todo);
        case "getTodos":
            return await getTodos_1.default();
        case "deleteTodo":
            return await deleteTodo_1.default(event.arguments.todoId);
        case "updateTodo":
            return await updateTodo_1.default(event.arguments.todo);
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBK0I7QUFDL0IsNkNBQXFDO0FBQ3JDLHlDQUFpQztBQUVqQyw2Q0FBc0M7QUFjdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBa0IsRUFBRSxFQUFFO0lBRTNDLFFBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7UUFDeEIsS0FBSyxTQUFTO1lBQ2QsT0FBTyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUxQyxLQUFLLFVBQVU7WUFDZixPQUFPLE1BQU0sa0JBQVEsRUFBRSxDQUFBO1FBRXZCLEtBQUssWUFBWTtZQUNqQixPQUFPLE1BQU0sb0JBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRS9DLEtBQUssWUFBWTtZQUNiLE9BQU8sTUFBTSxvQkFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFJakQ7WUFDQSxPQUFPLElBQUksQ0FBQTtLQUNkO0FBRUwsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiXG5pbXBvcnQgZGVsZXRlVG9kbyBmcm9tIFwiLi9kZWxldGVUb2RvXCJcbmltcG9ydCBnZXRUb2RvcyBmcm9tIFwiLi9nZXRUb2Rvc1wiXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCJcbmltcG9ydCB1cGRhdGVUb2RvIGZyb20gXCIuL3VwZGF0ZVRvZG9cIjtcblxuXG5pbnRlcmZhY2UgQXBwU3luY0V2ZW50IHtcbiAgICBpbmZvIDoge1xuICAgICAgICBmaWVsZE5hbWUgOiBzdHJpbmdcbiAgICB9LFxuICAgIGFyZ3VtZW50cyA6IHtcbiAgICAgICAgdG9kbyA6IFRvZG9cbiAgICAgICAgdG9kb0lkIDogc3RyaW5nXG4gICAgfVxufVxuXG5cbmV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudDpBcHBTeW5jRXZlbnQpID0+IHtcblxuICAgIHN3aXRjaChldmVudC5pbmZvLmZpZWxkTmFtZSl7XG4gICAgICAgIGNhc2UgXCJhZGRUb2RvXCIgOiBcbiAgICAgICAgcmV0dXJuIGF3YWl0IGFkZFRvZG8oZXZlbnQuYXJndW1lbnRzLnRvZG8pXG5cbiAgICAgICAgY2FzZSBcImdldFRvZG9zXCI6XG4gICAgICAgIHJldHVybiBhd2FpdCBnZXRUb2RvcygpXG5cbiAgICAgICAgY2FzZSBcImRlbGV0ZVRvZG9cIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGRlbGV0ZVRvZG8oZXZlbnQuYXJndW1lbnRzLnRvZG9JZClcblxuICAgICAgICBjYXNlIFwidXBkYXRlVG9kb1wiOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVRvZG8oZXZlbnQuYXJndW1lbnRzLnRvZG8pXG5cbiAgICAgICAgXG5cbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG59Il19