import { useEffect, useState } from 'react'
import './Catalog.css'
import { Card } from './Card/Card.jsx';
import { Link } from 'react-router-dom';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { tours as Tours } from './data.js';
import CircularProgress from '@mui/material/CircularProgress';
export function Catalog() {

    const theme = extendTheme({
        components: {
            JoySelect: {
                defaultProps: {
                    indicator: '↕',
                },
            },
        },
    });
    const [bdTours, setBdTours] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const categories = bdTours && getTypes()


    function getTypes() {
        const typeNames = new Set();

        bdTours && bdTours.map(tour => {

            tour && tour.types[0].map(type => {
                typeNames.add(type)
            })
        })
        return Array.from(typeNames);
    }
    useEffect(() => {
        function getData() {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'tours/')).then((snapshot) => {
                if (snapshot.exists()) {
                    setBdTours(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        getData();
        // function getTours() {
        //     const result = Tours;
        //     setTours(result);
        // }
        // getTours();
    }, []);
    const textChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };
    const resetSelect = () => {
        setSelectValue('');
    };
    const сategoryChange = (e) => {
        e.target.value === 'Всё' ? resetSelect() : setSelectValue(e.target.value)
        console.log(selectValue)
    };
    function sortTours(text) {
        let sortedTours = [...bdTours]
        if (text == 'релевантность') {
            sortedTours.sort((a, b) => a.id - b.id);
            setBdTours(sortedTours)
        }
        if (text === 'дороже') {
            sortedTours.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            console.log(sortedTours)
            setBdTours(sortedTours)
        }
        if (text === 'дешевле') {
            sortedTours.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            console.log(sortedTours)
            setBdTours(sortedTours)
        }
        if (text === 'популярность') {
            sortedTours.sort((a, b) => b.visits - a.visits);
            console.log(sortedTours)
            setBdTours(sortedTours)
        }
        if (text === 'рейтинг') {
            sortedTours.sort((a, b) => b.rating - a.rating);
            console.log(sortedTours)
            setBdTours(sortedTours)
        }

    }

    function sendData(){
        const db = getDatabase();
            tours.map(tour=>{
                set(ref(db, 'tours2/' + tour.id), {
                id: tour.id,
                name:tour.name,
                body:tour.body,
                cities:[

                        tour.cities.map(city=>{
                            return city;
                        })

                ],
                images:[

                        tour.images.map(image=>{
                            return image;
                        })
                ],
                price:tour.price,
                duration:tour.duration,
                date:tour.date,
                rating:tour.rating,
                reviewsCount:{
                    total:tour.reviewsCount.total,
                    fiveStars:tour.reviewsCount.fiveStars,
                    fourStars:tour.reviewsCount.fourStars,
                    threeStars:tour.reviewsCount.threeStars,
                    twoStars:tour.reviewsCount.twoStars,
                    oneStar:tour.reviewsCount.oneStar
                },
                types:[
                        tour.types.map(type=>{
                            return type;
                        })
                ],
                includeds:[
                        tour.includeds.map(include=>{
                            return include;
                        })
                ],
                excludeds:[
                        tour.excludeds.map(exclude=>{
                            return exclude;
                        })
                ],
                visits:tour.visits,
                reviews:[
                    tour.reviews.map(review=>{
                        return {
                            id:review.id,
                            body:review.body,
                            rating:review.rating,
                            reviewer: {
                                name: review.reviewer.name,
                                surname: review.reviewer.surname
                            }
                        }
                    })
                ]

            })
            })

    }


    return (
        <>
            <div className="catalog">
                <p className="catalog_title">Каталог</p>
                <div className="catalog_search">
                    <div className="select">
                        <label htmlFor="select-category">Выберите категорию:</label>

                        <CssVarsProvider theme={theme}>
                            <Select placeholder="Выберите категорию..." indicator={<KeyboardArrowDown />} sx={{ width: 240, [`& .${selectClasses.indicator}`]: { transition: '0.2s', [`&.${selectClasses.expanded}`]: { transform: 'rotate(-180deg)', }, }, }}>
                                <Option value='Все' onClick={() => { setSelectValue('') }}>Все</Option>
                                {
                                    bdTours &&
                                    categories.map(category => {
                                        return <Option value={category} onClick={() => { setSelectValue(category) }}>{category}</Option>
                                    })
                                }
                            </Select>
                        </CssVarsProvider>

                    </div>
                    <div className="sort_block">
                        <label htmlFor="select-category">Сортировать по:</label>
                        <CssVarsProvider theme={theme}>
                            <Select placeholder="Сортировать по..." indicator={<KeyboardArrowDown />} sx={{ width: 240, [`& .${selectClasses.indicator}`]: { transition: '0.2s', [`&.${selectClasses.expanded}`]: { transform: 'rotate(-180deg)', }, }, }}>
                                <Option value="релевантность" onClick={() => { sortTours('релевантность') }}>По релевантности</Option>
                                <Option value="дороже" onClick={() => { sortTours('дороже') }}>Дороже</Option>
                                <Option value="дешевле" onClick={() => { sortTours('дешевле') }}>Дешевле</Option>
                                <Option value="популярность" onClick={() => { sortTours('популярность') }}>По популярности</Option>
                                <Option value="рейтинг" onClick={() => { sortTours('рейтинг') }}>По рейтингу</Option>
                            </Select>
                        </CssVarsProvider>
                    </div>
                    {/* <input type="text" value={inputValue} placeholder='Поиск' onChange={textChange} /> */}
                    <div className="search_block">
                        <label htmlFor="select-category">Поиск:</label>

                        <CssVarsProvider theme={theme}>
                            <Input value={inputValue} placeholder='Поиск' onChange={textChange} color="neutral" />
                        </CssVarsProvider></div>

                    {/* <input type="submit" value="Поиск" onClick={()=>{}}/> */}
                </div>
                <div className="catalog_wrapper">
                    {
                        bdTours ?
                            bdTours.
                                filter(tour => (tour && tour.name.toLowerCase().includes(inputValue.toLowerCase())))
                                .filter(tour => (tour && tour.types[0].some(type => type.toLowerCase().includes(selectValue.toLowerCase()))))
                                .map(tour => {
                                    return (
                                        <Card {...tour} />
                                    )
                                })
                            : <div className="">
                                <CssVarsProvider>
                                    <CircularProgress color='success' />
                                </CssVarsProvider>
                                <br />
                                <p>загрузка данных...</p>
                            </div>
                    }
                </div>
                
            </div >
        </>
    )
}