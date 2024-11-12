import styles from './Pagination.module.scss'

interface PaginationProps {
    pageNumber: number;
    onChangePage: (i: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumber, onChangePage }) => {

    const onClickPage = (i: number) => {
        onChangePage(i)
    }

    return (
        <div className={styles.Pagination}>
            <ul className={styles.Pagination__items}>
                {
                    [...Array(3)].map((_, i) => (
                        <li
                            key={i}
                            onClick={(e) => onClickPage(i)}
                            className={`${pageNumber === i + 1 ? styles.Pagination__items_item_active : styles.Pagination__items_item}`}>
                            {i + 1}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination