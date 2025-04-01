import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

/* eslint-disable jsx-a11y/label-has-associated-control */
type Props = {
  todos: Todo[];
  onDelete: (id: number) => Promise<void>;
  onUpdate?: (id: number, data: Partial<Todo>) => Promise<boolean>;
  deletedTodos: number[];
  updatingIds: number[];
};

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  onUpdate,
  deletedTodos,
  updatingIds,
}) => {
  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          deletedTodos={deletedTodos}
          updatingIds={updatingIds}
        />
      ))}
    </>
  );
};
