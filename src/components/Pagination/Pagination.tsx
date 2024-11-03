import styles from './Pagination.module.scss'
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
    pageNumber: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumber, setPageNumber, setIsLoading }) => {

    const handlePage = (i: number) => {
        setPageNumber(i + 1)
        setIsLoading(true)
    }

    return (
        <div className={styles.Pagination}>
            <ul className={styles.Pagination__items}>
                {
                    [...Array(3)].map((_, i) => (
                        <li
                            key={i}
                            onClick={(e) => handlePage(i)}
                            className={styles.Pagination__items_item}>
                            {i + 1}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination