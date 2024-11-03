import { Dispatch, SetStateAction } from 'react';
import styles from './Search.module.scss'

interface SearchProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ value, setValue }) => {
    return (
        <div className={styles.Search}>
            <input
                className={styles.Search__input}
                placeholder='Поиск...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Search