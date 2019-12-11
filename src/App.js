import React from 'react';
import { Todo, Container } from './style.js';
import State from './state/state.js';
function App() {
  return (
    <Todo>
		<Container>
			<State />
		</Container>
	</Todo>
  );
}

export default App;
