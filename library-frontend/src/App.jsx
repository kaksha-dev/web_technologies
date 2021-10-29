import React from 'react';
import Button from './common/components/button';

function App() {
    const header = 'Welcome to the react application from index or App';

    return (
        <div>
            <p>{header}</p>
            <Button
                label="Configurable Submit"
                backgroundColor="blue"
                color="white"
            />
        </div>
    );
}

export default App;
