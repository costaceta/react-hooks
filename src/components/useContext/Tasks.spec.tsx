import { render, screen } from '@testing-library/react';
import Tasks from './Tasks'; 
import '@testing-library/jest-dom'; 
import { describe, expect, it } from 'vitest';

describe('Componente Tasks', () => {
  it('Should render title', () => {
    render(<Tasks />);

    const title = screen.getByRole('heading', { name: 'Lista de tarefas' });    
    expect(title).toBeInTheDocument();
  });

  it('Should render the AddTask component', () => {
    render(<Tasks />);
    
    const addTask = screen.getByTestId('add-task');
    expect(addTask).toBeInTheDocument();
  });

  it.skip('Should render the TaskList component', () => {
    render(<Tasks />);
    
    const taskList = screen.getByTestId('task-list'); 
    expect(taskList).toBeInTheDocument();
  });

});
