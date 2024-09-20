import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
// import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../counter/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
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
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    featuredItem && (
                <Col md className='m-1' key={idx}>
                    <AnimatedDisplayCard item={featuredItem} />
                </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;