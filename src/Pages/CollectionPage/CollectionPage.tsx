import { useEffect, useState } from 'react'
import styles from './CollectionPage.module.scss'
import Category from '../../components/Category/Category'
import Search from '../../components/Search/Search'
import PhotosCard from '../../components/PhotosCard/PhotosCard'
import { Data } from '../../types'
import Pagination from '../../components/Pagination/Pagination'

const CollectionPage = () => {

    const [data, setData] = useState<Data[]>([])
    const [value, setValue] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const categories = [
        { name: "Все" },
        { name: "Море" },
        { name: "Горы" },
        { name: "Архитектура" },
        { name: "Города" }
    ]

    useEffect(() => {
        fetch(`https://3de40168895133a4.mokky.dev/photo_collections?page=${pageNumber}&limit=4&${categoryId ? `category=${categoryId}` : ''}`)
            .then((res) => res.json())
            .then((json) => {
                setData(json.items)
                setIsLoading(false)
            })
    }, [categoryId, pageNumber, isLoading])

    return (
        <div className={styles.CollectionPage}>
            <h1 className={styles.CollectionPage__title}>Моя коллекция фотографий</h1>
            <div className={styles.CollectionPage__navigate}>
                <Category categories={categories} categoryId={categoryId} setCategoryId={setCategoryId} setIsLoading={setIsLoading} />
                <Search value={value} setValue={setValue} />
            </div>
            {
                isLoading ?
                    <div className={styles.CollectionPage__loading}>...Загрузка</div>
                    :
                    <PhotosCard data={data} value={value} />
            }
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} setIsLoading={setIsLoading} />
        </div>
    )
}

export default CollectionPage
