import { Container } from 'reactstrap';
import SubHeader from '../components/Subheader';
import CampsitesList from '../features/counter/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;
