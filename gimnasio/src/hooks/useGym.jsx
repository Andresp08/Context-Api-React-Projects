
import { useContext } from 'react';

import GymContext from '../context/GymProvider';

const useGym = () => {
    return useContext(GymContext);
}

export default useGym;