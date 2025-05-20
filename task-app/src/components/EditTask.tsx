import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import type { Task } from '../models/Task.model';
import PageLayout from './PageLayout';

const EditTask: React.FC = () => {
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [validated, setValidated] = useState(false);
    const { id } = useParams<{id: string}>();
    const { tasks, setTasks } = useTaskContext();
    const navigate = useNavigate();

    const existingTask = tasks.find(task => task.id === id);
    const [formData, setFormData] = useState<Omit<Task, 'id'> | null>(null);

    useEffect(() => {
        if (existingTask) {
            const {title, description, status} = existingTask;
            setFormData({title, description, status})
        }
    }, [existingTask]);

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? { ...prev, [name]: value} : null);
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
            if (!formData) return;
            const updatedTask: Task = {
                ...formData,
                id: id!,
            };

        setTasks(prev => prev.map(task => (task.id === id ? updatedTask : task)));
        setSuccess("Task updated successfully!")
        } catch (err) {
            setError("Something went wrong while saving the task.")
        }
    };

    if (!existingTask || !formData) {
        return (
            <PageLayout>
                <Container>
                    <Alert variant="warning">Task not found.</Alert>
                </Container>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Container>
                <h2>Edit Task</h2>

                {error && (
                    <Alert variant="danger" onClose={() => setError(null)} dismissible>
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
                        name="title"
                        value={formData.title}
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
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Select name="status" value={formData.status} onChange={handleChange} required>
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="done">Done</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select a status.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" className="mt-3">Save Changes</Button>
                </Form>
            </Container>
        </PageLayout>
    )

}

export default EditTask;