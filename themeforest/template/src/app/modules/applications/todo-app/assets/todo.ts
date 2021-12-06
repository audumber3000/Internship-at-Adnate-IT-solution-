export class Todo {
  id: number;
  title = '';
  description = '';
  completed = false;
  priority = 'medium';
  date = new Date();

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
