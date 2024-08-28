import { useState } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import CampsiteDetail from '../features/counter/campsites/CampsiteDetail';
import CampsitesList from '../features/counter/campsites/CampsitesList';
import { selectCampsiteById } from '../features/counter/campsitesSlice';



const CampsitesDirectoryPage = () => {
   const [campsiteId, setCampsiteId] = useState(0);
   const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            
        <Row>
            <Col sm='5' md='7'>
            <CampsitesList setCampsiteId={setCampsiteId} />
            </Col>
            <Col sm='7' md='5'>
            <CampsiteDetail campsite={selectedCampsite} />
            </Col>
        </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;