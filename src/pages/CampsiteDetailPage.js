import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/counter/campsitesSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SubHeader from '../components/Subheader';
import CommentsList from '../features/comments/CommentList';
import CampsiteDetail from '../features/counter/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
            <CampsiteDetail campsite={campsite} />
            <CommentsList campsiteId={campsiteId} />
            </>
        );
    }
    return (
        <Container>
           {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default CampsiteDetailPage;