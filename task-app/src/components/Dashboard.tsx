import  React from 'react';
import PageLayout from './PageLayout'
import TodoList from './TodoList'


const Dashboard: React.FC = () => {

    return (
        <PageLayout>
            <h2 className="mb-3">Your Tasks</h2>
            <TodoList/>
        </PageLayout>
    );
};

export default Dashboard;