/**
 * Created by tengxiaolei on 2016/12/30.
 */
const low = require('lowdb')
const db = low('db.json');

db.defaults({ posts: [], user: {} })
  .value()

db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .value()

db.set('user.name', 'typicode')
  .value()
