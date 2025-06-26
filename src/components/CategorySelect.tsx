import React, { useEffect } from 'react';
import { loadCategories, setSelectedCategory } from '../redux/categorySlice';
import { useDispatch, useSelector } from '../../src/redux/store'
import { RootState } from '../redux/store';
const CategorySelect: React.FC = () => {
    const dispatch = useDispatch();
    const categories: string[] = useSelector((state: RootState) => state.categories.items);
    const status: string = useSelector((state: RootState) => state.categories.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadCategories());
        }
    }, [status, dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedCategory(event.target.value));
    };

    return (
        <select onChange={handleChange}>
            <option value="">בחר קטגוריה</option>
            {categories.map((category: string) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategorySelect;
