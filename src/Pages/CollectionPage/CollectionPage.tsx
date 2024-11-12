import { useEffect, useState } from 'react'
import styles from './CollectionPage.module.scss'
import Category from '../../components/Category/Category'
import Search from '../../components/Search/Search'
import PhotosCard from '../../components/PhotosCard/PhotosCard'
import { Data } from '../../types'
import Pagination from '../../components/Pagination/Pagination'
import { CollectionService } from '../../services/reqres/collection'

const CollectionPage = () => {

    const [data, setData] = useState<Data[]>([])
    const [value, setValue] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const categories = [
        { name: "Все" },
        { name: "Море" },
        { name: "Горы" },
        { name: "Архитектура" },
        { name: "Города" }
    ]

    useEffect(() => {
        CollectionService.getCollection({ pageNumber, categoryId })
            .then((json) => {
                setData(json.items)
                setIsLoading(false)
            })
    }, [categoryId, pageNumber, isLoading])

    const handleCategory = (i: number) => {
        setCategoryId(i)
        setIsLoading(true)
    }

    const handleChangeSearch = (newValue: string) => {
        setValue(newValue);
    }

    const handleChangePage = (i: number) => {
        setPageNumber(i + 1)
        setIsLoading(true)
    }


    return (
        <div className={styles.CollectionPage}>
            <h1 className={styles.CollectionPage__title}>Моя коллекция фотографий</h1>
            <div className={styles.CollectionPage__navigate}>
                <Category categories={categories} categoryId={categoryId} onCategory={handleCategory} />
                <Search value={value} onChangeSearch={handleChangeSearch} />
            </div>
            {
                isLoading ?
                    <div className={styles.CollectionPage__loader}></div>
                    :
                    <PhotosCard data={data} value={value} />
            }
            <Pagination pageNumber={pageNumber} onChangePage={handleChangePage} />
        </div>
    )
}

export default CollectionPage
