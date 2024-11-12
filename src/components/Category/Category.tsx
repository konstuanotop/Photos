import styles from './Category.module.scss'
import { Categories } from '../../types'

interface CategoryProps {
    categories: Categories[];
    categoryId: number;
    onCategory: (i: number) => void;
}

const Category: React.FC<CategoryProps> = ({ categories, categoryId, onCategory }) => {

    const onClickCategory = (i: number) => {
        onCategory(i)
    }

    return (
        <div className={styles.Category}>
            <ul className={styles.Category__list}>
                {
                    categories.map((category, i) => (
                        <li
                            key={i}
                            className={`${categoryId === i ? styles.Category__list_item_active : styles.Category__list_item}`}
                            onClick={(e) => onClickCategory(i)}
                        >{category.name}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Category