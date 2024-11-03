import styles from './Category.module.scss'
import { Categories } from '../../types'
import { Dispatch, SetStateAction } from 'react';

interface CategoryProps {
    categories: Categories[];
    categoryId: number;
    setCategoryId: Dispatch<SetStateAction<number>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Category: React.FC<CategoryProps> = ({ categories, setCategoryId, setIsLoading }) => {

    const handleCategory = (i: number) => {
        setCategoryId(i)
        setIsLoading(true)
    }

    return (
        <div className={styles.Category}>
            <ul className={styles.Category__list}>
                {
                    categories.map((category, i) => (
                        <li
                            key={i}
                            className={styles.Category__list_item}
                            onClick={(e) => handleCategory(i)}
                        >{category.name}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Category