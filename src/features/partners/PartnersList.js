import { Col } from 'reactstrap';
import Partner from './Partner';
import { useSelector } from 'react-redux';
import { selectAllPartners } from './partnersSlice';
import { PARTNERS } from '../../app/shared/PARTNERS';

const PartnersList = () => {
    const partners =useSelector( selectAllPartners);
    return (
        <Col className='mt-4'>
            {PARTNERS.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                )
            })}
        </Col>
    )
}

export default PartnersList;