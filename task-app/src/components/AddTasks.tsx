import { Form, Button, Container, Alert } from 'react-bootstrap';
import type { Task } from '../models/Task.model'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout'
import { useTaskContext } from '../context/TaskContext';

const AddTasks: React.FC = () => {
    const [success, setSuccess] = useState<string | null>(null);
    const [validated, setValidated] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [task, setTask] = useState<Omit<Task, "id">>({
        title: "",
        description: "",
        status: "pending",
    });
    const { tasks, setTasks } = useTaskContext();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setTask(prev => ({...prev, [name]: value}))
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        setValidated(true);

        try {

        

        const newTask: Task = {
            ...task,
            id: crypto.randomUUID(),
        };

        setTasks([...tasks, newTask]);
        setSuccess("Task added successfully!")
    } catch (err) {
        setError("Something went wrong while saving the task.")
    }
    };

    return (
        <PageLayout>
            <Container>
                <h2>Add a Task</h2>

                {error && (
                    <Alert variant="danger" dismissible onClose={() => setError(null)}>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert variant="success" dismissible onClose={() => setSuccess(null)}>
                        {success}
                    </Alert>
                )}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                            Title is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="text"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Select name="status" value={task.status} onChange={handleChange} required>
                            <option value="pending">Pending</option>
                            <option value="in progress">In Progress</option>
                            <option value="done">Done</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select a status.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button type="submit" className="mt-3">Add Task</Button>
                </Form>
            </Container>
        </PageLayout>
    );
};

export default AddTasks;