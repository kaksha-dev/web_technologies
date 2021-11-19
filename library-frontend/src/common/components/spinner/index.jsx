import react from 'react';
import { StyledSpinner } from './styles';
const Spinner = () => {
    return (
        <StyledSpinner>
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </StyledSpinner>
    );
};

export default Spinner;
