import { Record } from 'immutable';

interface ICollection {
  body: string,
  title: string,
}

const collection: ICollection = {
  body: '',
  title: '',
}

export default class Post extends Record(collection) {
  public getTitle() {
    return this.get('title');
  }
}
