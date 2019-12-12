import React from 'react';
import { Provider } from 'react-redux';
import State from './state/state.js';
import { Todo, Container } from './style.js';
import EditMenu from './editMenu/editMenu.js';
import store from './store';

function App() {
  return (
    <Provider store={store}>
		<Todo>
			<Container>
				<State />
			</Container>
			<EditMenu />
		</Todo>
	</Provider>
  );
}

export default App;
