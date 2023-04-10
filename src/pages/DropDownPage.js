import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropDownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Black', value: 'black' }
    ];

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropDownPage;