import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './ComponentCarousel.css';

import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {ProjectService} from '../../service/ProjectService';
import {Button} from 'primereact/button';

export default class ComponentCarousel extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new ProjectService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getProjectsSmall().then(data => this.setState({cars: data}));
    }

    handleClick(car) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={`../../static/${car.brand}.${car.format}`} heigth={car.heigth} width={car.width} srcSet={`../../static/${car.brand}.png`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary"  onClick={event =>  window.open(car.handleClick,"_blank")} />
                            <Button icon="pi pi-star" className="p-button-secondary" onClick={event =>  window.open(car.handleClick,"_blank")} />
                            <Button icon="pi pi-cog" className="p-button-secondary" onClick={event =>  window.open(car.gitHubLink,"_blank")} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        //const basicHeader = <h2>Basic</h2>;
        const customHeader = <h2 className="p-carousel-header">Preview Gallery of Apps and Projects Platforms</h2>
        //const verticalHeader = <h2>Vertical</h2>

        return (
            <div className="carousel-demo">
                {/*<Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3}
        header={basicHeader} responsiveOptions={this.responsiveOptions}></Carousel>*/}

                <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                    responsiveOptions={this.responsiveOptions} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                {/*<Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{maxWidth: '400px', marginTop: '2em'}}
    numVisible={1} numScroll={1} verticalViewPortHeight="330px" header={verticalHeader}></Carousel>*/}
            </div>
        );
    }

}