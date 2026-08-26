import styles from './Slider.module.scss';
import {useState, useEffect} from 'react';


const sliderImg = [
    '../../assets/viajeros.2.jpg',
    '../../assets/viajeros.3.jpg',
    '../../assets/viajeros.4.jpg'
];
export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    return (
        <div className={styles.slider}>
            
        </div>
    )
}