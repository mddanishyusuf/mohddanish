import { withRouter } from 'next/router';

import { getLabels, getPost, getComments, getData } from '../config/api';

import Layout from '../components/Layout';
import ReadMore from '../components/ReadMore';

const SinglePost = withRouter(({ single, labels, comments, social }) => (
    <Layout labels={labels} social={social}>
        <ReadMore post={single} comments={comments} />
    </Layout>
));

SinglePost.getInitialProps = async ({ query }) => {
    const labels = await getLabels();
    const labelsJson = await labels.json();

    const post = await getPost(query.number);
    const postJson = await post.json();

    const comments = await getComments(query.number);
    const commentsJson = await comments.json();

    const data = await getData();
    console.log(data);
    return { single: postJson, labels: labelsJson, comments: commentsJson, social: data.social };
};

export default SinglePost;
