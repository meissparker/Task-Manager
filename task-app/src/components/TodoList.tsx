import {Button, Card, Alert} from 'react-bootstrap'
import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const TodoList: React.FC = () => {
    const [deletedMessage, setDeletedMessage] = useState<string | null>(null);
    const {tasks, setTasks } = useTaskContext();
    const navigate = useNavigate();

    const handleDelete = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
        setDeletedMessage("Task deleted successfully.")
    }

    return (
        <div>
            {deletedMessage && (
            <Alert variant="success" dismissible onClose={() => setDeletedMessage(null)}>
                {deletedMessage}
            </Alert>
            )}

            {tasks.length === 0 ? (
                <p className="text-muted">No tasks available.</p>
            ) : (
                tasks.map(task => (
                    <Card key={task.id} className="mt-3">
                        <Card.Body>
                            <Card.Text><strong>Title:</strong>{task.title}</Card.Text>
                            <Card.Text><strong>Description:</strong> {task.description}</Card.Text>
                            <Card.Text><strong>Status:</strong> {task.status}</Card.Text>

                            <Button
                            variant="secondary"
                            size="sm"
                            className="me-2"
                            onClick={() => navigate(`/edit/${task.id}`)}
                            >
                                Edit
                            </Button>

                            <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
        
        
    );

};

export default TodoList;