import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
// import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../counter/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state), 
        selectFeaturedPromotion(state), 
        selectFeaturedPartner(state)
    ]);
    console.log(items);
    return (
        <Row>
            {items.map((item, idx) => {
                return(
                    item && (
                <Col md className='m-1' key={idx}>
                    <AnimatedDisplayCard item={item} />
                </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;