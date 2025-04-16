import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const TodoUseffect = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filtroUsuario, setFiltroUsuario] = useState('');

    console.log(todos);

    // useEffect sem dependências – executa apenas uma vez (componentDidMount)
    useEffect(() => {
        console.log('Buscando todos os TODOS da API...');
        fetch(API_ENDPOINT)
            .then(res => res.json())
            .then(data => setTodos(data.slice(0, 30))) // limitar a 30 itens
            .catch(err => console.error('Erro ao buscar dados:', err));
    }, []);

    // useEffect com dependência – executa sempre que o filtro mudar
    useEffect(() => {
        if (filtroUsuario !== '') {
            console.log(`Filtrando TODOs do usuário ${filtroUsuario}`);
        }
    }, [filtroUsuario]);

    const todosFiltrados = filtroUsuario
        ? todos.filter(todo => todo.userId === Number(filtroUsuario))
        : todos;

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>📌 Lista de Afazeres (useEffect)</h1>

            <label htmlFor="usuario">Filtrar por ID do usuário:</label>
            <input
                id="usuario"
                type="number"
                value={filtroUsuario}
                onChange={(e) => setFiltroUsuario(e.target.value)}
                placeholder="Digite o ID do usuário"
                style={{ marginLeft: '1rem', padding: '0.5rem' }}
            />

            <ul style={{ marginTop: '2rem' }}>
                {todosFiltrados.map(todo => (
                    <li key={todo.id}>
                        <strong>[Usuário {todo.userId}]</strong> {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}