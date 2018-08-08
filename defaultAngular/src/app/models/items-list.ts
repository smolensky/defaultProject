export class TodoItems{
  todoItems = [
    { id: 'test1', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test2', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test3', title: 'Mr. Nice', comment: 'asdfasdf', status: false },
    { id: 'test4', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test5', title: 'Mr. Nice', comment: 'asdfasdf', status: false },
    { id: 'test6', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test7', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test8', title: 'Mr. Nice', comment: 'asdfasdf', status: false },
    { id: 'test9', title: 'Mr. Nice', comment: 'asdfasdf', status: true },
    { id: 'test10', title: 'Mr. Nice', comment: 'asdfasdf', status: true }
  ];
}

export class TodoItem {
  id: string;
  title: string;
  comment: string;
  status: boolean;
}