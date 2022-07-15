import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layouts/main';
import Layout from '../../containers/layout';

/**
 * Component for showing About page
 * @component
 */
const P404 = ({ content }) => {
    useEffect(() => {
        document.title = '404';
    }, []);

    return (
        <Layout content={content?.footer}>
            <MainLayout>
                <section className="p404">
                    <h1>{content?.P404?.title}</h1>
                    <p>{content?.P404?.content}</p>
                    <Link to="">{content?.P404?.link}</Link>
                </section>
            </MainLayout>
        </Layout>
    );
};

P404.propTypes = {
    content: PropTypes.object.isRequired
};

export default P404;
