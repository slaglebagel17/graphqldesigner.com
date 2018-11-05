import reducers from '../../client/reducers/schemaReducers';

test('User can select a MongoDB database', () => {
  let state = reducers({}, {type:'CHOOSE_DATABASE',payload:'MongoDB'});
  expect(state.database).toEqual('MongoDB');
});

test('User can select a MySQL database', () => {
  let state = reducers({}, {type:'CHOOSE_DATABASE',payload:'MySQL'});
  expect(state.database).toEqual('MySQL');
});

test('User can select a PostgreSQL database', () => {
  let state = reducers({}, {type:'CHOOSE_DATABASE',payload:'PostgreSQL'});
  expect(state.database).toEqual('PostgreSQL');
});

test('User can select a PostgreSQL database utilizing Join Monster', () => {
  let state = reducers({}, {type:'CHOOSE_DATABASE',payload:'PostgreSQL+JoinMonster'});
  expect(state.database).toEqual('PostgreSQL+JoinMonster');
});

test('User can select a MySQL database utilizing Join Monster', () => {
  let state = reducers({}, {type:'CHOOSE_DATABASE',payload:'MySQL+JoinMonster'});
  expect(state.database).toEqual('MySQL+JoinMonster');
});

