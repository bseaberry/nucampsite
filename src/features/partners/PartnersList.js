import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Partner from './Partner';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectAllPartners } from './partnersSlice';
// import { PARTNERS } from '../../app/shared/PARTNERS';

const PartnersList = () => {
    const partners =useSelector( selectAllPartners);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                );
            })}
            </Row>
        </Col>
    )
}

export default PartnersList;