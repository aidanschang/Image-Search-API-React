import { render } from '@testing-library/react';
import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

class ImageCard extends React.Component {
    /*Gives access to a single DOM element by creating refs in the constructor*/
    constructor(props) {
        super(props);

        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil( height / 10 + 1);

        this.setState({ spans });
    }

    render() {
        const {description,urls}= this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description}src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;