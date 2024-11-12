import styles from './Search.module.scss'

interface SearchProps {
    value: string;

    onChangeSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChangeSearch }) => {

    return (
        <div className={styles.Search}>
            <input
                className={styles.Search__input}
                placeholder='Поиск...'
                value={value}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
        </div>
    )
}

export default Search