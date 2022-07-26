import React, { Component } from "react";
import '../styles/styles.scss';
import SlideImageOne from '../assets/image.png';
// https://codepen.io/AlexBalaushko/pen/mdepQzo

class Spin extends Component {
    state = {
        carouselDeg: 17,
        itemDeg: -17,
        centerItem: 0,
        prevItem: 9,
        lastItem: 9,
        nextItem: 1,
        carousel: [
            { name: SlideImageOne, id: 0, position: 1 },
            { name: SlideImageOne, id: 1, position: 2 },
            { name: SlideImageOne, id: 2, position: 3 },
            { name: SlideImageOne, id: 3, position: 4 },
            { name: SlideImageOne, id: 4, position: 5 },
            { name: SlideImageOne, id: 5, position: 6 },
            { name: SlideImageOne, id: 6, position: 7 },
            { name: SlideImageOne, id: 7, position: 8 },
            { name: SlideImageOne, id: 8, position: 9 },
            { name: SlideImageOne, id: 9, position: 10 }
        ]
    };

    getIdItems = side => {
        // true = next, false = prev
        const { nextItem, prevItem, lastItem } = this.state;

        if (side) {
            this.setState(
                {
                    centerItem: nextItem
                },
                () => prevNext(this.state.centerItem)
            );
        } else {
            this.setState(
                {
                    centerItem: prevItem
                },
                () => prevNext(this.state.centerItem)
            );
        }

        const prevNext = itemId => {
            if (itemId === lastItem) {
                this.setState({
                    nextItem: 0,
                    prevItem: lastItem - 1
                });
            } else if (itemId === 0) {
                this.setState({
                    prevItem: lastItem,
                    nextItem: 1
                });
            } else {
                this.setState(state => ({
                    nextItem: state.centerItem + 1,
                    prevItem: state.centerItem - 1
                }));
            }
        };
    };

    next = () => {
        this.getIdItems(true);
        this.setState(state => ({
            carouselDeg: state.carouselDeg - 36,
            itemDeg: state.itemDeg + 36
        }));
    };

    prev = () => {
        this.getIdItems(false);
        this.setState(state => ({
            carouselDeg: state.carouselDeg + 36,
            itemDeg: state.itemDeg - 36
        }));
    };

          centerDisplay = () => {

          }
    getCssClass = id => {
        const { centerItem, nextItem, prevItem } = this.state;

        if (id === centerItem) {
            return "active";
        } else if (id === nextItem) {
            return "next";
        } else if (id === prevItem) {
            return "prev";
        }
    };

    // 36

    render() {
        return (
            <div className="Apps">
                <button onClick={this.next}>Next</button>
                <button onClick={this.prev}>Prev</button>
                <div className="test" />
                <div
                    className="carousel"
                    style={{ transform: `rotate(${this.state.carouselDeg}deg)` }}
                >
                    {this.state.carousel.map((item, index) => (
                        <img   className={`item-carousel ${this.getCssClass(index)}`}
                               key={item.id}
                               src={item.name}
                               alt={item.position}
                               style={{ transform: `rotate(${this.state.itemDeg}deg)` }}
                        />
                    ))}
                    <img className="center-img" src={require('../assets/image11.png')} alt=""/>
                </div>
            </div>
        );
    }
}

export default Spin;
