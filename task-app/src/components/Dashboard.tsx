import  React from 'react';
import PageLayout from './PageLayout'
import TodoList from './TodoList'
import { useTaskContext } from '../context/TaskContext';


const Dashboard: React.FC = () => {
    const { tasks } = useTaskContext();

    return (
        <PageLayout>
            <h2 className="mb-3">Your Tasks</h2>
            <TodoList tasks={tasks}/>
        </PageLayout>
    );
};

export default Dashboard;