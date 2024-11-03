import { Data } from '../../types'
import styles from './PhotosCard.module.scss'

interface PhotosCardProps {
    data: Data[];
    value: string;
}

const PhotosCard: React.FC<PhotosCardProps> = ({ data, value }) => {

    return (
        <div className={styles.PhotosCard}>
            <ul className={styles.PhotosCard__items}>
                {
                    data
                        .filter((item, i) => {
                            return item.name.toLowerCase().includes(value.toLowerCase())
                        })
                        .map((item, i) => (
                            <li
                                key={i}
                                className={styles.PhotosCard__items_item}>
                                <div className={styles.PhotosCard__items_item_top}>
                                    <img src={item.photos[0]} alt='Большая фотография' />
                                </div>
                                <div className={styles.PhotosCard__items_item_bottom}>
                                    <div className={styles.PhotosCard__items_item_bottom_small}>
                                        <img src={item.photos[1]} alt='Маленькая фотография' />
                                    </div>
                                    <div className={styles.PhotosCard__items_item_bottom_small}>
                                        <img src={item.photos[2]} alt='Маленькая фотография' />
                                    </div>
                                    <div className={styles.PhotosCard__items_item_bottom_small}>
                                        <img src={item.photos[3]} alt='Маленькая фотография' />
                                    </div>
                                </div>
                                <div>{item.name}</div>
                            </li>
                        ))
                }


            </ul>
        </div>
    )
}

export default PhotosCard