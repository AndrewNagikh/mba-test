import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Disc from '../components/Disc'
import './homeCSS.css'

const Home = () => {
    const [data, setData] = useState({isLoad: false, subjects: []})
    const isLoad = useSelector((store) => store.apiData.isLoad)
    const subjects = useSelector((store) => store.apiData.data.filter((subject) => subject.specializedSubjects.length === 10).slice(0,5))
    useEffect(() => {
        setData({isLoad, subjects})
    }, [isLoad])
  return (
    <div className="container-xxl wrapper">
        <h1>Специализированные дисциплины</h1>
        {isLoad ? (
            data.subjects.map((subject) => <Disc key={subject.id} subject={subject}/>)
        ) : (
            'Load'
        )}
        <div className="rectangles">
            <div className="rectangle-red col-xl-5 col-lg-6 col-md-10 col-sm-12 col-12">
                <div className="title-desc">
                    <h2 className="rectangleTitle">Практические модули</h2>
                    <p className="rectangleDesc">Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
                </div>
            </div>
            <div className="rectangle-black col-xl-5 col-lg-6 col-md-10 col-sm-12 col-12">
            <div className="title-desc">
                    <h2 className="rectangleTitle">Итоговая аттестация</h2>
                    <ul>
                        <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
                        <li>Защита итоговой аттестационной работы</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home