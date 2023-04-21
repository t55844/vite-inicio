import React from 'react';
import Main from './Main';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

export default function Home(props) {

    return (
        <>
            <Main />
            <div className="h-screen w-screen bg-zincGray800">
                <Carousel>
                    <CarouselItem>
                        <div className="bg-zincGray500 w-64 h-64">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-zincGray600 w-64 h-64">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-zincGray700 w-64 h-64">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-zincGray700 w-64 h-64">4</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-zincGray700 w-64 h-64">5</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-zincGray700 w-64 h-64">6</div>
                    </CarouselItem>
                </Carousel>
            </div>

        </>
    )
}